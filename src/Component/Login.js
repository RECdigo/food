import React, { useState } from 'react';
import './Login.css'; 

function Login() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); 

  
    if (username === 'yourUsername' && password === 'yourPassword') {
      setIsLoginSuccessful(true);
    } else {
      setIsLoginSuccessful(false);
    }
  };

  const toggleLoginForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

 

  

  return (
    <div className="login-container">
      <div className="login-text" onClick={toggleLoginForm}>
        Cabinet
      </div>
      {isLoginFormVisible && (
        <div className="login-form-container">
          {isLoginSuccessful ? (
            <div className="login-success">Login Successful!</div>
          ) : (
            <form className="login-form" onSubmit={handleLogin}>
              <h2>Order Management</h2>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
            </form>
          )}
        </div>
        
      )}
    </div>
  );
}

export default Login;
