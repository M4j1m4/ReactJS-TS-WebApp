import React, { useEffect, useState } from 'react';
import './Home.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import DonationForm from './DonationForm';
import AdminPanel from './AdminPanel';
import AboutUs from './AboutUs';
import ChatBot from 'react-simple-chatbot';
import PrayWithUs from './PWU';

const chatbotSteps = [
    {
        id: '1',
        message: 'Hello! How can I assist you today?',
        trigger: 'options',
    },
    {
        id: 'options',
        options: [
            { value: 'prayer', label: 'Request a prayer', trigger: 'prayer' },
            { value: 'info', label: 'Get information', trigger: 'info' },
            { value: 'donate', label: 'Donate', trigger: 'donate' },
            { value: 'contact', label: 'Contact Us', trigger: 'contact'},
        ],
    },
    {
        id: 'prayer',
        message: '"You also, like living stones, are being built into a spiritual house to be a holy priesthood, offering spiritual sacrifices acceptable to God through Jesus Christ."1 Peter 2:5 (NIV)',
        trigger: 'options',
    },
    {
        id: 'info',
        message: 'Christ, the Living Stone Fellowship (CLSF) is a Christ-centered church, encouraging one another as one family, transforming individuals, communities and nations through the proclamation of the Gospel of the Kingdom of God.',
        trigger: 'options',
    },
    {
        id: 'donate',
        message: 'You can donate using the donate button on the website.',
        trigger: 'options',
    },
    {
        id: 'contact',
        message: 'You can click the Pray With Us option and get on our mailing list.',
        trigger: 'options',
    },
];


const ChurchWebsite: React.FC = () => {
    const [backendData, setBackendData] = useState({ homeContent: [] });

    useEffect(() => {
        fetch("/api")
            .then(response => response.json())
            .then(data => {
                setBackendData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    // Define the toggleChatbot function
    const toggleChatbot = () => {
        setIsChatbotOpen(!isChatbotOpen);
    };

    return (
        <Router>
            <div className="church-website">
                <header className="header">
                    <h1 className="header-title"><i>{backendData.homeContent?.[0]}</i></h1>
                    <img className='ChurchLogo' src="./src/images/5.png" alt="ChurchLogo" />
                    <nav className="header-nav">
                        <ul className="header-nav-list">
                            <button>
                                <li className="header-nav-item"><Link to="/"><span className="transition"></span><span className="gradient"></span><span className="label">HOME</span></Link></li>
                            </button>
                            <button>
                                <li className="header-nav-item"><Link to="/about"><span className="transition"></span><span className="gradient"></span><span className="label">ABOUT US</span></Link></li>
                            </button>
                            <button>
                                <li className="header-nav-item"><Link to="/admin"><span className="transition"></span><span className="gradient"></span><span className="label">ADMIN</span></Link></li>
                            </button>
                            <button>
                                <li className="header-nav-item"><Link to="/praywithus"><span className="transition"></span><span className="gradient"></span><span className="label">PRAY WITH US</span></Link></li>
                            </button>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <div className='bg'>
                                    <section id="home" className="home-section">
                                        <h2 className="home-title"><i>{backendData.homeContent?.[1]}</i></h2>
                                        <p className="home-text">May God be with you</p>
                                        <Link to='/donate' className="donate-button"><b>DONATE FOR THE CHURCH</b></Link>
                                    </section>
                                    <section id="services" className="services-section">
                                    <h2 className="services-title"><i>GET INVOLVED. BE A MINISTER.</i></h2>
                                    <dl className="services-list">
                                    <div className="services-item">x
                                        <dt><b>SUNDAY SERVICES</b></dt>
                                        <dd><p className="indent">{backendData.homeContent?.[2]}</p></dd>
                                    </div>
                                    <div className="services-item">
                                        <dt><b>CAMPUS MINISTRY</b></dt>
                                        <dd><p className="indent">{backendData.homeContent?.[3]}</p>
                                        </dd>
                                    </div>
                                    <div className="services-item">
                                        <dt><b>YUPPIES MINISTRY</b></dt>
                                        <dd>
                                            <p className="indent">{backendData.homeContent?.[4]}</p>
                                        </dd>
                                    </div>
                                    <div className="services-item">
                                        <dt><b>COMMUNITY SERVICE</b></dt>
                                        <dd><p className="indent">{backendData.homeContent?.[5]}</p></dd>
                                    </div>
                                    <div className="services-item">
                                        <dt><b>SUPPORT MINISTRY</b></dt>
                                        <dd><p className="indent">{backendData.homeContent?.[6]}</p></dd>
                                    </div>
                                    <div className="services-item">
                                    <dt><b>PRAYER MEETING</b></dt>
                                        <dd>
                                            <p className="indent">{backendData.homeContent?.[7]}</p>
                                        </dd>
                                    </div>
                                    <div className="services-item">
                                        <dt><b>SPECIAL EVENTS</b></dt>
                                        <dd><p className="indent">{backendData.homeContent?.[8]}</p></dd>
                                    </div>  
                                    <button className="chatbot-toggle" onClick={toggleChatbot}>
                                        {isChatbotOpen ? 'Close Chatbot' : 'Open Chatbot'}
                                    </button>
                                    {isChatbotOpen && (
                                        <div className="chatbot-container">
                                            <ChatBot steps={chatbotSteps} />
                                        </div>
                                    )}
                                </dl>
                                </section>  
                                <section id="contact" className="contact-section">
                                <p className="contact-text"> <i>PRAY WITH US AND GROW YOUR FAITH</i></p>
                                <p className="contact-info">{backendData.homeContent?.[9]}</p>
                                <p className="contact-info">{backendData.homeContent?.[10]}</p>
                                </section>
                                </div>
                            </>
                        } />
                        <Route path="/donate" element={<DonationForm></DonationForm>} />
                        <Route path="/admin" element={<AdminPanel></AdminPanel>} />
                        <Route path="/about" element={<AboutUs></AboutUs>} />
                        <Route path="/praywithus" element={<PrayWithUs></PrayWithUs>} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default ChurchWebsite;