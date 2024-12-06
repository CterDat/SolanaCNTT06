import React, { useState } from "react";
import axios from "axios";

const Login2 = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:3001/users"); // API JSON Server
      const users = response.data;

      // Tìm user với username và password khớp
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        onLoginSuccess(user); // Truyền dữ liệu user sau khi đăng nhập thành công
      } else {
        alert("Sai tên đăng nhập hoặc mật khẩu!");
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };

  return (
    // <form onSubmit={handleLogin}>
    //   <div>
    //     <label>Username:</label>
    //     <input
    //       type="text"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label>Password:</label>
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <button type="submit">Đăng nhập</button>
    // </form>
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

export default Login2;
