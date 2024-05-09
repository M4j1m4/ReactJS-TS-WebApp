import React, { useEffect, useState } from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
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

  return (
    <div className="container">
        <div className="section">
            <div className="title">
                <h1 className="header">{backendData.homeContent?.[15]}</h1>
            </div>
            <p>
            {backendData.homeContent?.[16]}
            </p>
        </div>
        <div className="section">
            <div className="title">
                <h1>{backendData.homeContent?.[17]}</h1>
            </div>
            <p>
            {backendData.homeContent?.[18]}
            </p>
        </div>
        <div className="section">
            <div className="title">
                <h1>{backendData.homeContent?.[19]}</h1>
            </div>
            <p>
            {backendData.homeContent?.[20]}
            </p>
        </div>
        <div className="section">
            <div className="title">
                <h1>{backendData.homeContent?.[21]}</h1>
            </div>
            <p>
            {backendData.homeContent?.[22]}
            </p>
        </div>
        <div className="section">
            <div className="title">
                <h1>{backendData.homeContent?.[23]}</h1>
            </div>  
            <p>{backendData.homeContent?.[24]}</p>
        </div>
    </div>
  );
};

export default AboutUs;
