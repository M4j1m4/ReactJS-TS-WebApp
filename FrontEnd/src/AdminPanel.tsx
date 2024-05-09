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
    const[ aboutush1, setAboutush1] =useState('');
    const[ contenth1, setContenth1] =useState('');
    const[ aboutush2, setAboutush2] =useState('');
    const[ contenth2, setContenth2] =useState('');
    const[ aboutush3, setAboutush3] =useState('');
    const[ contenth3, setContenth3] =useState('');
    const[ aboutush4, setAboutush4] =useState('');
    const[ contenth4, setContenth4] =useState('');
    const[ aboutush5, setAboutush5] =useState('');
    const[ contenth5, setContenth5] =useState('');

 
    const handleUpdate = () => {
      const updatedData = {
        headerTitle: headerTitle || undefined, 
        homeTitle: homeTitle || undefined, 
        sundayServices: sundayServices || undefined,
        campusMinistry: campusMinistry || undefined,
        yuppiesMinistry: yuppiesMinistry || undefined,
        communityService: communityService || undefined,
        supportMinistry: supportMinistry || undefined,
        prayerMeeting: prayerMeeting || undefined,
        specialEvents: specialEvents || undefined,
        address: address || undefined,
        contacts: contacts || undefined,
        aboutush1: aboutush1 || undefined,
        contenth1: contenth1 || undefined,
        aboutush2: aboutush2 || undefined,
        contenth2: contenth2 || undefined,
        aboutush3: aboutush3 || undefined,
        contenth3: contenth3 || undefined,
        aboutush4: aboutush4 || undefined,
        contenth4: contenth4 || undefined,
        aboutush5: aboutush5 || undefined,
        contenth5: contenth5 || undefined
      };


        fetch('/api/update', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ headerTitle, homeTitle, sundayServices, campusMinistry, yuppiesMinistry, communityService, supportMinistry, prayerMeeting, specialEvents, address, contacts, aboutush1, contenth1, aboutush2, contenth2, aboutush3, contenth3, aboutush4, contenth4, aboutush5, contenth5}),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Update successful:', data);           
          })
          .catch((error) => {
            console.error('Error updating data:', error);            
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
            <div className="input-group1">
              <input className="input"
              type="text"
              value={aboutush1}
              onChange={(e) => setAboutush1(e.target.value)}
              placeholder="AboutUs-H1"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group1">
              <input className="input"
              type="text"
              value={contenth1}
              onChange={(e) => setContenth1(e.target.value)}
              placeholder="AboutUs-Content1"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group1">
              <input className="input"
              type="text"
              value={aboutush2}
              onChange={(e) => setAboutush2(e.target.value)}
              placeholder="AboutUs-H2"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group1">
              <input className="input"
              type="text"
              value={contenth2}
              onChange={(e) => setContenth2(e.target.value)}
              placeholder="AboutUs-Content2"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group1">
              <input className="input"
              type="text"
              value={aboutush3}
              onChange={(e) => setAboutush3(e.target.value)}
              placeholder="AboutUs-H3"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group1">
              <input className="input"
              type="text"
              value={contenth3}
              onChange={(e) => setContenth3(e.target.value)}
              placeholder="AboutUs-Content3"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group1">
              <input className="input"
              type="text"
              value={aboutush4}
              onChange={(e) => setAboutush4(e.target.value)}
              placeholder="AboutUs-H4"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group1">
              <input className="input"
              type="text"
              value={contenth4}
              onChange={(e) => setContenth4(e.target.value)}
              placeholder="AboutUs-Content4"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group1">
              <input className="input"
              type="text"
              value={aboutush5}
              onChange={(e) => setAboutush5(e.target.value)}
              placeholder="AboutUs-H5"
              />
              <button className="button" onClick={handleUpdate}><span className="button-content">Update Content</span></button>
            </div>
            <div className="input-group1">
              <input className="input"
              type="text"
              value={contenth5}
              onChange={(e) => setContenth5(e.target.value)}
              placeholder="AboutUs-Content5"
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






