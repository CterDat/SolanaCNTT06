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
                            <h5>{ticket.title}</h5>
                            <p>Giá: {ticket.price} SOL</p>
                            <p>Ngày đặt: {new Date(ticket.purchaseDate).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookingHistory;