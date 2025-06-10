function MovieRow({ title, movies }) {
  return (
    <div className="movie-row">
      <h3>{title}</h3>
      <div className="movie-thumbnails">
        {movies.map((movie, index) => (
          <img key={index} src={movie} alt="Movie Poster" />
        ))}
      </div>
    </div>
  );
}

function Dashboard() {
  const trending = [
    "https://via.placeholder.com/200x300?text=Movie+1",
    "https://via.placeholder.com/200x300?text=Movie+2",
    "https://via.placeholder.com/200x300?text=Movie+3",
    "https://via.placeholder.com/200x300?text=Movie+4"
  ];

  const originals = [
    "https://via.placeholder.com/200x300?text=Original+1",
    "https://via.placeholder.com/200x300?text=Original+2",
    "https://via.placeholder.com/200x300?text=Original+3"
  ];

  return (
    <div className="dashboard">
      <header className="header">
        <div className="logo">🎬 CineWave</div>
        <nav className="nav">
          <a href="index.html">Home</a>
          <a href="signin.html">Logout</a>
        </nav>
      </header>

      <div className="content">
        <h1>Welcome to CineWave</h1>
        <MovieRow title="Trending Now" movies={trending} />
        <MovieRow title="CineWave Originals" movies={originals} />
      </div>
    </div>
  );
}

ReactDOM.render(<Dashboard />, document.getElementById("dashboard-root"));
