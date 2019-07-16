// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
admin.initializeApp(functions.config().firebase);

/**
* Here we're using Gmail to send 
*/
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

// to update passwords:

// $ firebase functions:config:set gmail.email=<email> gmail.password=<password>

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendMail = functions.https.onCall((data, context) => {
  const sender = data.sender || "unknown sender";

  const text = data.content + "\n\n sender: " + data.sender;

  const mailOptions = {
    from: "Axenu.com <" + gmailEmail + ">", // Something like: Jane Doe <janedoe@gmail.com>
    to: gmailEmail,
    subject: "Contact form",
    text: text,
    reply_to: sender,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      //   return res.send("Error: ", error.toString(), info);
      return "Error: " + error.toString();
    }
    // return res.send("Sent");
    return "Sent";
  });
});
