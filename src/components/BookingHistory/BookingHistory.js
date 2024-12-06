// BookingHistory.js
import React from 'react';

const BookingHistory = ({ tickets }) => {
    return (
        <div className="mt-4">
            <h2>Lịch Sử Đặt Vé</h2>
            {tickets.length === 0 ? (
                <p>Chưa có vé nào được đặt.</p>
            ) : (
                <ul className="list-group">
                    {tickets.map((ticket, index) => (
                        <li className="list-group-item" key={index}>
                            {ticket.title} - {ticket.price} SOL
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookingHistory;