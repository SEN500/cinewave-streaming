function App() {
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">🎬 CineWave</div>
        <nav className="nav">
          <a href="#">Sign In</a>
        </nav>
      </header>

      <main className="hero">
        <h1>Watch What Moves You</h1>
        <p>Unlimited movies, TV shows, and more.</p>
        <button className="cta">Get Started</button>
      </main>

      <section className="pricing">
        <h2>Choose Your Plan</h2>
        <div className="plans">
          <div className="plan">
            <h3>Basic</h3>
            <p className="price">$6.99/month</p>
            <ul>
              <li>SD Quality</li>
              <li>1 Device</li>
              <li>Watch Anywhere</li>
            </ul>
            <button>Select</button>
          </div>

          <div className="plan popular">
            <h3>Standard</h3>
            <p className="price">$10.99/month</p>
            <ul>
              <li>HD Quality</li>
              <li>2 Devices</li>
              <li>Downloadable Content</li>
            </ul>
            <button>Select</button>
          </div>

          <div className="plan">
            <h3>Premium</h3>
            <p className="price">$15.99/month</p>
            <ul>
              <li>4K + HDR</li>
              <li>4 Devices</li>
              <li>Offline Mode</li>
            </ul>
            <button>Select</button>
          </div>
        </div>
      </section>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
<nav className="nav">
  <a href="signin.html">Sign In</a>
</nav>
