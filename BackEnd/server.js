const express = require('express');
const app = express();

app.use(express.json());

let homeContent = ["Christ, The Living Stone Fellowship University Belt", "WELCOME TO OUR CHURCH",
"9 a.m.-11 a.m., we welcome you to praise God each Sunday.", "Evangelism every Wed & Fri, Discipleship Training, Cell Group", 
"Evangelism, Discipleship Training, Cell Group", "3-5pm CSS Payatas Service", "Worship Team", "Wed 5-8pm @CLSF Ubelt, Wed 9-12mid @CLSF Mandaluyong, Thu 7-9pm @CLSF Mandaluyong",
"Encounter with God Retreat", "3rd Floor Orient Pearl Building, Recto Ave, Manila", "734315 / +63 9204779351 / admin@clsfubeltor.org", "Khen Abesamis", "khenabesamis123@gmail.com", "Praying", "Hello! Christ, the Living Stone Fellowship University Belt I want to get to know more of God.",
"Welcome to CLSF","You also, like living stones, are being built into a spiritual house to be a holy priesthood, offering spiritual sacrifices acceptable to God through Jesus Christ. (1 Peter 2:5)", "About Us", "From its humble beginnings as a campus ministry in the 70’s, otherwise known as the Jesus People Movement, Christ, the Living Stone Fellowship blossomed into a global prophetic ministry with more than 500 churches in the Philippines and worldwide. Prophesied twice by leading prophets as a Philadelphia church, CLSF seeks to remain faithful to the calling, the character, grace and anointing of the Philadelphia church as written in Rev. 3:7-13. As a prophetic church, CLSF will continue to proclaim the Gospel of the Kingdom (Matt. 24:14), plant more churches all over the Philippines and many parts of the world pursuant to the Great Commission (Matt. 28:18-20) and raise up the Bride of Christ (Rev. 19:7) in these Last Days.",
"Our Vision", "We are a Christ-centered, Spirit-filled, missions-oriented church, where every member is a minister, transforming individuals, communities and nations through the Gospel of the Kingdom of God.", "Our Mission", "To bring individuals, communities and nations to the saving knowledge of the Lord Jesus Christ through gospel proclamation, bringing the believers to intimacy with God through a lifestyle of worship and prayer and equipping them for ministry work through effective and dynamic discipleship and leadership training.", 
"Core Values", "Christ-Likeness (Romans 8:29), Love for God (Matthew 22:37), Servant-Leadership (Matthew 20:28), Faithfulness to the Gospel, Intercession and Prayer (Matthew 21:13), Nationalism (Romans 10:1), Covenant Leadership (1 John 3:16)"];

app.get("/api", (req, res) => {
  res.json({ "homeContent": homeContent });
});

app.post('/api/update', (req, res) => {
  const { headerTitle, homeTitle, sundayServices, campusMinistry, yuppiesMinistry, commmunityService, supportMinistry, prayerMeeting, specialEvents, address, contacts, name, email, subject, message, aboutush1, contenth1, aboutush2, contenth2, aboutush3, contenth3, aboutush4, contenth4,aboutush5, contenth5 } = req.body;

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
    name || homeContent[11],
    email || homeContent[12],
    subject || homeContent[13],
    message || homeContent[14],
    aboutush1 || homeContent[15],
    contenth1 || homeContent[16],
    aboutush2 || homeContent[17],
    contenth2 || homeContent[18],
    aboutush3 || homeContent[19],
    contenth3 || homeContent[20],
    aboutush4 || homeContent[21],
    contenth4 || homeContent[22],
    aboutush5 || homeContent[23],
    contenth5 || homeContent[24]
  ];

  res.json({ message: 'Content updated successfully' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});



