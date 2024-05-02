import React from 'react';
import './AdminLogin.css';
import { BrowserRouter as Link, Routes, Route } from 'react-router-dom';
import AdminPanel from './AdminPanel';

interface LoginProps {}

const LoginForm: React.FC<LoginProps> = () => {
  return (
      <Routes>
        <Route path='/' element={
          <div className="login-box">
            <form>
              <div className="user-box">
                <input type="text" name="" required />
                <label>Username</label>
              </div>
              <div className="user-box">
                <input type="password" name="" required />
                <label>Password</label>
              </div>
              <center>
                <Link to='/adminPanel'>LogIn</Link>
              </center>
            </form>
          </div>
        } />
        <Route path='/adminPanel' element={<AdminPanel />} />
      </Routes>
  );
};

export default LoginForm;