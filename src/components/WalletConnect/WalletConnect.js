import React, { useEffect } from 'react';
import './WalletConnect.css';

const WalletConnect = ({ setWalletAddress, walletAddress }) => {
    const connectWallet = async () => {
        try {
            if (window.solana) {
                const response = await window.solana.connect();
                setWalletAddress(response.publicKey.toString());
            } else {
                alert('Phantom wallet not found! Please install it.');
            }
        } catch (err) {
            console.error('Connection failed:', err);
            alert('Connection failed. Check console for details.');
        }
    };

    useEffect(() => {
        if (window.solana) {
            window.solana.on('connect', () => {
                setWalletAddress(window.solana.publicKey.toString());
            });
        }
    }, [setWalletAddress]);

    return (
        <div className="wallet-section">
            <h2>Kết Nối Ví</h2>
            <button className="wallet-button" onClick={connectWallet}>Connect to Phantom Wallet</button>
            {walletAddress && (
                <p className="wallet-status">Đã kết nối: {walletAddress}</p>
            )}
        </div>
    );
};

export default WalletConnect;