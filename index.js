
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
const API_KEY= process.env.API_KEY


const http = require("http");
  
http.createServer((req, res) => {
  
    // Initializing sendgrid object
    const mailer = require("@sendgrid/mail");
  
    // Insert your API key here
    mailer.setApiKey(API_KEY);
      
    // Setting configurations
    const msg = {
      to: ["davids@gmail.com", "your.second.email@gmail.com"],
      from: "allenjones@jones-dev.com",
      subject: `Full Stack Developer Application`,
      html:
        `
        <p>Dear Davids,</p>

        <p>Thank you so much for applying for the full stack developer role in 
        our company.
        We reviewed your application and we think you would be a great fit.
        Kindly let me know when you are ready for an interview.
        </p>

        <p>
        Thank you.
        Sincerely,
        Allen Jones
        </p>
        `
           


    };
  
    // Sending mail
    mailer.send(msg, function(err, json) {
      if (err) {
        console.log(err);
  
        // Writing error message
        res.write("Can't send message sent");
      } else {
  
        // Writing success message
        res.write("Message sent");
      }
    });
  
    res.end();
 })
.listen(PORT, () => console.log(`Server running on PORT : ${PORT}`));
  

