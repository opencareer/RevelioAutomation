const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

async function sendEmail(delayMilliseconds) {
  // Wait for the specified delay (5 seconds)
  await new Promise(resolve => setTimeout(resolve, delayMilliseconds));

  // Read the HTML report file
  const reportPath = path.join(__dirname, '../reports/html/index.html');
  if (!fs.existsSync(reportPath)) {
    console.error('Report file not found at path:', reportPath);
    return;
  }

  const reportContent = fs.readFileSync(reportPath, { encoding: 'utf-8' });

  // Create a transporter object
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'reveliolabsqa@gmail.com', // Your email address
      pass: 'ggvr opmp ztaa kmij'   // Your email password or app-specific password
    }
  });

  // Define email options
  let mailOptions = {
    from: 'reveliolabsqa@gmail.com',
    to: 'patrick@reveliolabs.com, reveliolabsqa@gmail.com', // Stakeholder's email address
    subject: 'See the attached HTML file.',
    html: reportContent,
    attachments: [
      {
        filename: 'report.html',
        path: reportPath,
        contentType: 'text/html'
      }
    ],
  };

  // Send the email
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email: ' + error);
  }
}

sendEmail(3000); // 3-second delay

