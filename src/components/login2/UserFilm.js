const UserFilms = ({ user }) => {
    return (
      <div>
        <h1>Danh sách phim của {user.username}</h1>
        <ul>
          {user.film.map((film) => (
            <li key={film.id}>
              <h2>{film.title}</h2>
              <p>{film.description}</p>
              <p>Giá: {film.price} USD</p>
              <p>Thể loại: {film.category}</p>
              <img src={film.image} alt={film.title} width="200" />
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UserFilms;
  