import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetail.css'; // Đường dẫn tới tệp CSS

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/movies/${id}`);
                setMovie(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetail();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">Error fetching movie details: {error.message}</div>;
    }

    return (
        <div className="movie-detail">
            <h1 className="text-center mb-4">Chi tiết vé</h1>
            <h1>{movie.title}</h1>
            <img src={movie.image} alt={movie.title} className="img-fluid" />
            <p>{movie.description}</p>
            <p><strong>Giá: {movie.price} SOL</strong></p> {/* Hiển thị giá vé */}
        </div>
    );
};

export default MovieDetail;