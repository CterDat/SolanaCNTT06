import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList/MovieList';
import MovieDetail from './components/MovieDetail/MovieDetail';
import WalletConnect from './components/WalletConnect/WalletConnect';
import WalletInfo from './components/WalletInfo/WalletInfo';
// import Banner from './components/NavBar/NavBar';
import AddMovie from './components/AddMovie/AddMovie'; // Thêm import này
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Buffer } from 'buffer';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import BookingHistory from './components/BookingHistory/BookingHistory';
window.Buffer = Buffer;

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [purchasedTickets, setPurchasedTickets] = useState([]);
  const [user, setUser] = useState(null);
  const handleLogout = () => {
    setUser(null); // Đặt lại trạng thái người dùng
  };
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "http://fonts.googleapis.com/css?family=Dosis:400,700,500|Nunito:300,400,600";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Cleanup function to remove the link when component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="custom-container mt-4">
        <div className="wallet-section">
          <WalletConnect setWalletAddress={setWalletAddress} />
          {walletAddress && (
            <>
              <WalletInfo walletAddress={walletAddress} />
              <p className="wallet-status">Connected: {walletAddress}</p>
            </>
          )}
        </div>
        <Navbar user={user} onLogout={handleLogout} /> {/* Truyền user và hàm logout */}
        <Routes>
          <Route path="/" element={<MovieList walletAddress={walletAddress} />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/add-movie" element={<AddMovie />} /> {/* Thêm route mới */}
          <Route path="/register" element={<Register />} /> {/* Route cho đăng ký */}
          <Route path="/login" element={<Login setUser={setUser} />} /> {/* Route cho đăng nhập */}
          <Route path="/booking-history" element={<BookingHistory tickets={purchasedTickets} />} /> {/* Route cho lịch sử đặt vé */}
        </Routes>

      </div>
      <Footer />
    </Router>
  );
};

export default App;