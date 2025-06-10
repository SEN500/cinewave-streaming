function SignUp() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    // Simulate saving user to localStorage
    localStorage.setItem('cinewave-user', JSON.stringify({ email, password }));
    setMessage("Account created successfully! You can now sign in.");
  };

  return (
    <div className="form-container">
      <h2>Create Your Account</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Sign Up</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

ReactDOM.render(<SignUp />, document.getElementById("signup-root"));
