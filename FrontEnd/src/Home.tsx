import React from 'react';
import './Home.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import DonationForm from './DonationForm';

const ChurchWebsite: React.FC = () => {
  return (
    <Router>
        <div className="church-website">
        <header className="header">
            <h1 className="header-title"><i>Christ, The Living Stone Fellowship University Belt</i></h1>
            <img className='ChurchLogo' src="./src/images/5.png" alt="ChurchLogo" />
            <nav className="header-nav">
            <ul className="header-nav-list">
                <li className="header-nav-item"><a href="#home" className="header-nav-link"><b>HOME</b></a></li>
                <li className="header-nav-item"><a href="#about" className="header-nav-link"><b>ABOUT US</b></a></li>
                <li className="header-nav-item"><a href="#services" className="header-nav-link"><b>SERVICES</b></a></li>
                <li className="header-nav-item"><a href="#contact" className="header-nav-link"><b>PRAY WITH US</b></a></li> 
            </ul>
            </nav>
        </header>
        <main>
            <Routes>
                <Route path="/" element={
                    <>
                        <div className='bg'>
                            <section id="home" className="home-section">
                            <h2 className="home-title"><i>WELCOME TO OUR CHURCH</i></h2>
                            <p className="home-text">May God be with you!</p>
                            <Link to='/donate' className="home-button"><b>DONATE FOR THE CHURCH</b></Link>
                            </section>
                            <section id="about" className="about-section">
                            <h2 className="about-title"><i>ABOUT US</i></h2>
                            <p className="about-text">Learn more about our church community and mission.</p>
                            <a href="#" className="about-link"><b>CHAT WITH US</b></a>
                            </section>
                            <section id="services" className="services-section">
                            <h2 className="services-title"><i>GET INVOLVED. BE A MINISTER.</i></h2>
                            <dl className="services-list">
                                <div className="services-item">
                                    <dt><b>SUNDAY SERVICES</b></dt>
                                    <dd><p>9 a.m.-11 a.m., we welcome you to praise God each Sunday.</p></dd>
                                </div>
                                <div className="services-item">
                                    <dt><b>CAMPUS MINISTRY</b></dt>
                                    <dd><p>Evangelism every Wed & Fri</p>
                                        <p>Discipleship Training</p>
                                        <p>Cell Group</p>
                                    </dd>
                                </div>
                                <div className="services-item">
                                    <dt><b>YUPPIES MINISTRY</b></dt>
                                    <dd>
                                        <p>Evangelism</p>
                                        <p>Discipleship Training</p>
                                        <p>Cell Group</p>
                                    </dd>
                                </div>
                                <div className="services-item">
                                    <dt><b>COMMUNITY SERVICE</b></dt>
                                    <dd><p>3-5pm CSS Payatas Service</p></dd>
                                </div>
                                <div className="services-item">
                                    <dt><b>SUPPORT MINISTRY</b></dt>
                                    <dd><p>Worship Team</p></dd>
                                </div>
                                <div className="services-item">
                                <dt><b>PRAYER MEETING</b></dt>
                                    <dd>
                                        <p>Wed 5-8pm @CLSF Ubelt</p>
                                        <p>Wed 9-12mid @CLSF Mandaluyong</p>
                                        <p>Thu 7-9pm @CLSF Mandaluyong</p>
                                    </dd>
                                </div>
                                <div className="services-item">
                                    <dt><b>SPECIAL EVENTS</b></dt>
                                    <dd><p>Encounter with God Retreat</p></dd>
                                </div>
                            </dl>
                            </section>
                            <section id="contact" className="contact-section">
                            <p className="contact-text"> <i>PRAY WITH US AND GROW YOUR FAITH</i></p>
                            <p className="contact-info">3rd Floor Orient Pearl Building, Recto Ave, Manila</p>
                            <p className="contact-info">734315 / +63 9204779351 / admin@clsfubeltor.org</p>
                            </section>
                        </div>
                    </>
                } />
                <Route path="/donate" element={<DonationForm></DonationForm>} />
            </Routes>
        </main>
        </div>
    </Router>
  );
};  


export default ChurchWebsite;