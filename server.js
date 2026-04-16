const express = require('express')
const nodemailer = require("nodemailer");
const app = express()
 
const PORT = 3000

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "renctestudent@gmail.com",
    pass: "qvkutajqvkfrmjkf"
  }
});

// Handle form submission
app.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: "ryan.caufield@infoflo.tech", // must match your Gmail
      to: "youremail@gmail.com",   // where you receive messages
      subject: `Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `
    });

    res.send("<h2>Email sent successfully!</h2><a href='/'>Go back</a>");
  } catch (error) {
    console.error(error);
    res.send("<h2>Error sending email</h2><a href='/'>Try again</a>");
  }
});
 
// Middleware to read form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html')
})