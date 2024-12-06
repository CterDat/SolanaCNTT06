import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import tệp CSS riêng

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [tickets, setTickets] = [];
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/users', { username, password, tickets});
            alert('Đăng ký thành công!');
            navigate('/login');
        } catch (err) {
            setError('Đăng ký thất bại. Vui lòng thử lại.');
        }
    };

    return (
        <div className="register-container">
            <h2>Đăng Ký</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Tên người dùng"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Đăng Ký</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Register;