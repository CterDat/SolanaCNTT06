import React, { useState } from "react";


const HistoryUserFilm = ({films}) => {

  

  return (
    <div>
        <h1>Lịch sử đặt vé</h1>
        {films && films.map((item, index) => (
            <div key={index} style={{ display: "flex", gap: "40px", backgroundColor: '#fff', padding: "20px 32px", alignItems: 'center', boxShadow: "1px 2px 1px solid rgb(0,0, 0.3)" }} key={item.id}>
                <div style={{ display: 'flex', gap: "60px", alignItems: "center" }}>
                    <h3>Tên film: {item.title}</h3>
                    <p style={{ color: '#000' }}>Giá: {item.price} USD</p>
                    <p style={{ color: '#000' }}>Category: {item.category}</p>
                    <p style={{ color: '#000' }}>Description: {item.description}</p>
                </div>
                <div>
                    <img src={item.image} alt={item.title} style={{ width: "100px", height: "180px", objectFit: 'cover' }} />
                </div>
            </div>
            ))}

        
            
    </div>
  );
};

export default HistoryUserFilm;
