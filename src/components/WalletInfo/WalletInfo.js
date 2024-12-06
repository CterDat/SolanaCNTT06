import React, { useEffect, useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import './WalletInfo.css'; // Đường dẫn tới tệp CSS

const WalletInfo = ({ walletAddress }) => {
    const [balance, setBalance] = useState(0);

    // Sử dụng endpoint RPC chính xác


    useEffect(() => {
        const connection = new Connection('https://api.devnet.solana.com'); // Sử dụng Devnet
        const getBalance = async () => {
            if (walletAddress) {
                try {
                    const publicKey = new PublicKey(walletAddress);
                    const balanceLamports = await connection.getBalance(publicKey);
                    setBalance(balanceLamports / 1e9); // Chia cho 1e9 để chuyển đổi từ lamports sang SOL
                } catch (error) {
                    console.error('Error fetching balance:', error);
                }
            }
        };
        getBalance();
    }, [walletAddress]);

    return (
        <div className="wallet-info">
            <h2>Số Dư: {balance} SOL</h2>
        </div>
    );
};

export default WalletInfo;