import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        // Implement your login logic here, for example:
        const isValidLogin = (username === 'admin' && password === 'C114594123'); // Use your own authentication logic

        if (isValidLogin) {
            // If login is successful, redirect to the admin panel
            navigate('/adminPanel');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
      <div className="box-container">
        <div className="login-box">
            <form onSubmit={handleLogin}>
                <div className="user-box">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label>Password</label>
                </div>
                <center>
                    <button type="submit">Log In</button>
                </center>
            </form>
        </div>
      </div>
    );
};

export default LoginForm;
