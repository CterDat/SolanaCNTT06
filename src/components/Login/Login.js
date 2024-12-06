import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import tệp CSS riêng

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:3001/users');
            const users = response.data;
            const foundUser = users.find(user => user.username === username && user.password === password);

            if (foundUser) {
                setUser(foundUser);
                alert('Đăng nhập thành công!');
                navigate('/');
            } else {
                setError('Tên người dùng hoặc mật khẩu không đúng.');
            }
        } catch (err) {
            setError('Đăng nhập thất bại. Vui lòng thử lại.');
        }
    };

    return (
        <div className="login-container">
            <h2>Đăng Nhập</h2>
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
                <button type="submit">Đăng Nhập</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;