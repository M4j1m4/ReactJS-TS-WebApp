import React, { useState } from 'react';
import './PWU.css';

const PrayWithUs: React.FC = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleUpdate = () => {
        const updatedData = {
          email: email || undefined,
          name: name || undefined, 
          subject: subject || undefined,
          message: message || undefined,
        };

        fetch('/api/update', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, subject, message}),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Update successful:', data);
            })
            .catch((error) => {
              console.error('Error updating data:', error);
            });
        };

    return (
        <div className="contain">
            <div className="mailing-form">
                <h2 className="center">Get on Our Mailing List</h2>
                <form className="form">
                    <input
                        type="text"
                        placeholder="Enter your Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                        className="email-input"
                    />
                    <input
                        type="mail"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        className="email-input"
                    />
                    <input
                        type="text"
                        placeholder="Enter the Subject"
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)}
                        required
                        className="email-input"
                    />
                     <input
                        type="text"
                        placeholder="Enter a Message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        required
                        className="message-input"
                    />
                    <button type="submit" onClick={handleUpdate} className="submit-button">Submit</button>
                </form>
            </div>
            <div className="loc">
                <h1 className="center">Our Location</h1>
                <img src="./src/images/8.jpg" alt="Map"></img>
            </div>
        </div>
    );
}

export default PrayWithUs;








