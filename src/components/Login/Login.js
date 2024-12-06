import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import tệp CSS riêng

const Login = ({  }) => {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:3001/users"); // API JSON Server
      const users = response.data;

      // Tìm user với username và password khớp
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if(user){
        navigate('/',{state: {user}})
      }else{
        alert("Tên người dùng hoặc mật khẩu không đúng!");
        return;
      }

     
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };
    return (
        <div className="login-container">
            <h2>Đăng Nhập</h2>
            <form onSubmit={handleLogin}>
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
        </div>
    );
};

export default Login;