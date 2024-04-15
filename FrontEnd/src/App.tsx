import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const ChurchWebsite: React.FC = () => {
  return (

    <div className="church-website bg" >
      <header className="header">
        <h1 className="header-title">Christ, The Living Stone Fellowship University Belt</h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item"><a href="#home" className="header-nav-link">Home</a></li>
            <li className="header-nav-item"><a href="#about" className="header-nav-link">About Us</a></li>
            <li className="header-nav-item"><a href="#services" className="header-nav-link">Services</a></li>
            <li className="header-nav-item"><a href="#contact" className="header-nav-link">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="home-section">
          <h2 className="home-title">Welcome to our Church</h2>
          <p className="home-text">May God be with you!</p>
          <button className="home-button">Donate for the Church</button>
        </section>

        <section id="about" className="about-section">
          <h2 className="about-title">About Us</h2>
          <p className="about-text">Learn more about our church community and mission.</p>
          <a href="#" className="about-link">Chat with Us</a>
        </section>

        <section id="services" className="services-section">
          <h2 className="services-title">Get Involved. Be a Minister.</h2>
          <ul className="services-list">
            <li className="services-item">Sunday Services</li>
            <li className="services-item">Campus Ministry</li>
            <li className="services-item">Yuppies Ministry</li>
            <li className="services-item">Community Service</li>
            <li className="services-item">Support Ministry</li>
            <li className="services-item">Prayer Meeting</li>
            <li className="services-item">Special Events</li>
          </ul>
        </section>

        <section id="contact" className="contact-section">
          <h2 className="contact-title">Pray with Us</h2>
          <p className="contact-text">Grow your faith</p> 
          <p className="contact-info">3rd Floor Orient Pearl Building, Recto Ave, Manila</p>
          <p className="contact-info">7343115 / +63 9204779351 / admin@clsfubelt.org</p>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-text">&copy; 2024 Christ, The Living Stone Fellowship University Belt. All rights reserved.</p>
      </footer>
    </div>
  );
};

ReactDOM.render(<ChurchWebsite />, document.getElementById('root'));