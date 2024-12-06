import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './MovieList.css';
import SendTransaction from '../SendTransaction/SendTransaction';
import BookingHistory from '../BookingHistory/BookingHistory';
import HistoryUserFilm from '../login2/HistoryUserFilm';

const MovieList = ({ walletAddress }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isBuying, setIsBuying] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null); // Đổi thành null thay vì mảng
    const [purchasedTickets, setPurchasedTickets] = useState([]);
    const location = useLocation();
    const user2  = location.state?.user;
    const [user, setUser] = useState(user2);
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:3001/movies');
                setMovies(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    const handleBuyClick = (movie) => {
        setSelectedMovie(movie);
        setIsBuying(true);
        setPurchasedTickets(prevTickets => [...prevTickets, movie]);
    };

    const handleTransactionSuccess = () => {
        alert('Giao dịch thành công!');
        setIsBuying(false); // Đóng giao diện mua vé
        // Có thể thêm logic khác nếu cần
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">Error fetching movies: {error.message}</div>;
    }

    return (
        <div>
            <h1 className="text-center mb-4 mt-4">Danh Sách Phim</h1>
            {isBuying ? (
                <SendTransaction
                    walletAddress={walletAddress}
                    amount={selectedMovie.price}
                    user = {user}
                    film = {selectedMovie}
                    setUser = {setUser}
                    onSuccess={handleTransactionSuccess} // Truyền hàm vào đây
                />
            ) : (
                <div className="row">
                    {movies.map(movie => (
                        <div className="col-md-3 mb-4" key={movie.id}>
                            <div className="card">
                                <img src={movie.image} alt={movie.title} />
                                <div className="card-body ">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.description}</p>
                                    <p className="card-text"><strong>Giá: {movie.price} SOL</strong></p>

                                    <Link to={`/movies/${movie.id}`} className="btn btn-secondary btn-large">Detail</Link>
                                    <div className='btn-container'>
                                        <button className="btn btn-primary btn-large" onClick={() => handleBuyClick(movie)}>Mua vé</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {/* <BookingHistory tickets={purchasedTickets} /> */}
            {
                user && user.film &&  (
                    <HistoryUserFilm films={user.film} />
                )
            }
        </div>
    );
};

export default MovieList;