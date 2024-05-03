import React, { useEffect, useState } from 'react';
import './AdminPanel.css';

const AdminPanel: React.FC = () => {
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

    const [headerTitle, setHeaderTitle] = useState('');
    const [homeTitle, setHomeTitle] = useState('');
    const[ sundayServices, setSundayServices] = useState('');
    const[ campusMinistry, setCampusMinistry] = useState('');
    const[ yuppiesMinistry, setYuppiesMinistry] = useState('');
    const[ communityService, setCommunityService] = useState('');
    const[ supportMinistry, setSupportMinistry] = useState('');
    const[ prayerMeeting, setPrayerMeeting] = useState('');
    const[ specialEvents, setSpecialEvents] = useState('');
    const[ address, setAddress] = useState('');
    const[ contacts, setContacts] =useState('');
 
    const handleUpdate = () => {
      const updatedData = {
        headerTitle: headerTitle || undefined, // Send headerTitle if it's not empty, otherwise send undefined
        homeTitle: homeTitle || undefined, // Send homeTitle if it's not empty, otherwise send undefined
        sundayServices: sundayServices || undefined,
        campusMinistry: campusMinistry || undefined,
        yuppiesMinistry: yuppiesMinistry || undefined,
        communityService: communityService || undefined,
        supportMinistry: supportMinistry || undefined,
        prayerMeeting: prayerMeeting || undefined,
        specialEvents: specialEvents || undefined,
        address: address || undefined,
        contacts: campusMinistry || undefined,
      };


        fetch('/api/update', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ headerTitle, homeTitle, sundayServices, campusMinistry, yuppiesMinistry, communityService, supportMinistry, prayerMeeting, specialEvents, address, contacts}),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Update successful:', data);
            // You can optionally reset the input fields or show a success message
          })
          .catch((error) => {
            console.error('Error updating data:', error);
            // Show an error message or handle the error as needed
          });
      };

    return(
        <div>
          <h1 className="headerTitle">ADMIN PANEL</h1>
          <div className="input-container">
            <div className="input-group0">
              <input className="input"
              type="text"
              value={headerTitle}
              onChange={(e) => setHeaderTitle(e.target.value)}
              placeholder="Header Title"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button> 
            </div>
            <div className="input-group">
              <input className="input"
              type="text"
              value={homeTitle}
              onChange={(e) => setHomeTitle(e.target.value)}
              placeholder="Home Title"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group">
              <input className="input"
              type="text"
              value={sundayServices}
              onChange={(e) => setSundayServices(e.target.value)}
              placeholder="Sunday Services"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group">
              <input className="input"
              type="text"
              value={campusMinistry}
              onChange={(e) => setCampusMinistry(e.target.value)}
              placeholder="Campus Ministry Events"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group">
              <input className="input"
              type="text"
              value={yuppiesMinistry}
              onChange={(e) => setYuppiesMinistry(e.target.value)}
              placeholder="Yuppies Ministry"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group">
              <input className="input"
              type="text"
              value={communityService}
              onChange={(e) => setCommunityService(e.target.value)}
              placeholder="Community Service"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group1">
              <input className="input"
              type="text"
              value={supportMinistry}
              onChange={(e) => setSupportMinistry(e.target.value)}
              placeholder="Support Ministry"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group1">
              <input className="input"
              type="text"
              value={prayerMeeting}
              onChange={(e) => setPrayerMeeting(e.target.value)}
              placeholder="Prayer Meeting"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group1">
              <input className="input"
              type="text"
              value={specialEvents}
              onChange={(e) => setSpecialEvents(e.target.value)}
              placeholder="Special Events"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group1">
              <input className="input"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group1">
              <input className="input"
              type="text"
              value={contacts}
              onChange={(e) => setContacts(e.target.value)}
              placeholder="Contacts"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
          </div>
          <div className="mailing-info">
            <h2 className="mailing-info-header">Mailing Info</h2>
            <div className="mailing-info-item">
              <strong>Name:</strong> {backendData.homeContent?.[11] || 'No name provided'}
            </div>
            <div className="mailing-info-item">
              <strong>Email:</strong> {backendData.homeContent?.[12] || 'No email provided'}
            </div>
            <div className="mailing-info-item">
              <strong>Subject:</strong> {backendData.homeContent?.[13] || 'No subject provided'}
            </div>
            <div className="mailing-info-item">
              <strong>Message:</strong> {backendData.homeContent?.[14] || 'No message provided'}
            </div>
          </div>
        </div>
    )
}

export default AdminPanel