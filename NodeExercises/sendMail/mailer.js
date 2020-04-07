// npm install nodemailer
// Change the Values for your needs
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
                user: 'YourGmailAccount@gmail.com',
                pass: 'YourSuperSecretPassword'
        }
});

var mailOptions = {
        from: 'YourGmailAccount@gmail.com',
        to: 'YourBestFriendEmail@SomewhereInTime.WorldWide',
        subject: 'Sending Email using NodeJS',
        text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
        if (error) {
                console.log(error);
        } else {
                console.log('Email Sent: ' + info.response);
        }
});

