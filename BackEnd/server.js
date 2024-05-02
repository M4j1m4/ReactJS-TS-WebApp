const express = require('express');
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

let homeContent = ["Christ, The Living Stone Fellowship University Belt", "WELCOME TO OUR CHURCH",
"9 a.m.-11 a.m., we welcome you to praise God each Sunday.", "Evangelism every Wed & Fri, Discipleship Training, Cell Group", 
"Evangelism, Discipleship Training, Cell Group", "3-5pm CSS Payatas Service", "Worship Team", "Wed 5-8pm @CLSF Ubelt, Wed 9-12mid @CLSF Mandaluyong, Thu 7-9pm @CLSF Mandaluyong",
"Encounter with God Retreat", "3rd Floor Orient Pearl Building, Recto Ave, Manila", "734315 / +63 9204779351 / admin@clsfubeltor.org"];

// API endpoint
app.get("/api", (req, res) => {
  res.json({ "homeContent": homeContent });
});

// Update content endpoint
app.post('/api/update', (req, res) => {
  const { headerTitle, homeTitle, sundayServices, campusMinistry, yuppiesMinistry, commmunityService, supportMinistry, prayerMeeting, specialEvents, address, contacts } = req.body;

  // Update the homeContent array
  homeContent = [
    headerTitle || homeContent[0], 
    homeTitle || homeContent[1], 
    sundayServices || homeContent[2],
    campusMinistry || homeContent[3],
    yuppiesMinistry || homeContent[4],
    commmunityService || homeContent[5],
    supportMinistry || homeContent[6],
    prayerMeeting || homeContent[7],
    specialEvents || homeContent[8],
    address || homeContent[9],
    contacts || homeContent[10],
  ];

  res.json({ message: 'Content updated successfully' });
});

app.get("/api", (req, res) => {
  res.json({ "homeContent": homeContent });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});