function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('cinewave-user'));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
      setMessage("Sign-in successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    } else {
      setMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleLogin} className="signup-form">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Sign In</button>
        {message && <p className="message">{message}</p>}
      </form>
      <p style={{ color: "#ccc", marginTop: "15px" }}>
        Don't have an account? <a href="signup.html" style={{ color: "#00bfff" }}>Sign up</a>
      </p>
    </div>
  );
}

ReactDOM.render(<SignIn />, document.getElementById("signin-root"));
