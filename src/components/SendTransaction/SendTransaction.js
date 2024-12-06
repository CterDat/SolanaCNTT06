import React, { useState } from 'react';
import { Connection, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import './SendTransaction.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SendTransaction = ({ walletAddress, amount,film, onSuccess, user, setUser }) => {
    console.log(film)
    const [recipientAddress, setRecipientAddress] = useState('<YOUR_WALLET_ADDRESS>'); // Địa chỉ ví của bạn
    const [transactionStatus, setTransactionStatus] = useState('');
    const [solAmount, setSolAmount] = useState(amount || ''); // State cho số lượng SOL
    const navigate = useNavigate()

    const sendTransaction = async () => {
        if (!recipientAddress || !solAmount) {
            alert('Please enter both recipient address and amount.');
            return;
        }

        const amountToSend = parseFloat(solAmount);
        if (isNaN(amountToSend) || amountToSend <= 0) {
            alert('Please enter a valid amount of SOL.');
            return;
        }

        try {
            const connection = new Connection('https://api.devnet.solana.com'); // Kết nối với Devnet
            const publicKey = new PublicKey(walletAddress);
            const recipientPublicKey = new PublicKey(recipientAddress);
            const lamports = amountToSend * 1e9; // Chuyển đổi từ SOL sang lamports

            // Lấy recentBlockhash
            const { blockhash } = await connection.getLatestBlockhash();

            // Tạo giao dịch
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: recipientPublicKey,
                    lamports,
                })
            );

            // Thiết lập recentBlockhash và feePayer
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = publicKey;

            // Ký giao dịch
            const { signature } = await window.solana.signAndSendTransaction(transaction);

            onSuccess();
            // Xác nhận giao dịch
            const success=  await connection.confirmTransaction(signature);
            setTransactionStatus(`Transaction sent! Signature: ${signature}`);
            const updatedFilms = [...user.film, film];
            const ok = await axios.patch(`http://localhost:3001/users/${user.id}`, {
                    film: updatedFilms,
            });
            
            // {
            //     setUser(ok.response.data)
            // }

            alert("Đặt vé thành công!");
        } catch (error) {
            console.error('Transaction failed:', error);
            setTransactionStatus('Transaction failed. Check console for details.');
        }
    };

    return (
        <div className='send-transaction'>
            <h3>Gửi SOL để mua vé</h3>
            <input
                type="text"
                placeholder="Địa chỉ người nhận"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
            />
            <input
                type="number"
                placeholder="Số lượng SOL"
                value={solAmount} // Sử dụng state solAmount
                onChange={(e) => setSolAmount(e.target.value)}
                disabled // Cập nhật state khi người dùng nhập
            />
            <button onClick={sendTransaction}>Gửi</button>
            {transactionStatus && <p className="transaction-status">{transactionStatus}</p>}
        </div>
    );
};

export default SendTransaction;