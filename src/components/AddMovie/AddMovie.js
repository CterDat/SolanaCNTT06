import React, { useState } from 'react';
import axios from 'axios';
import './AddMovie.css';

const AddMovie = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMovie = { title, description, price: parseFloat(price), image };

        try {
            await axios.post('http://localhost:3001/movies', newMovie);
            alert('Sản phẩm đã được thêm thành công!');
            // Reset form
            setTitle('');
            setDescription('');
            setPrice('');
            setImage('');
        } catch (error) {
            console.error('Error adding movie:', error);
            alert('Có lỗi xảy ra. Vui lòng thử lại.');
        }
    };

    return (
        <div className="add-movie">
            <h1>Thêm Sản Phẩm Mới</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tiêu đề:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Mô tả:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Giá (SOL):</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>URL hình ảnh:</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Thêm Sản Phẩm</button>
            </form>
        </div>
    );
};

export default AddMovie;