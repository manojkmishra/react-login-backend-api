import nodemailer from "nodemailer";

const from = '"ReactApp" <info@reactapp.com>';

function setup() 
 {        return nodemailer.createTransport({
                    host: "smtp.mailtrap.io",
                    port: 2525,
                    auth: {  user: "7c357ed86ea686",  pass: "d44689610a4275"  }
                });

}

export function sendConfirmationEmail(user) {
    const tranport = setup();
    const email = {
      from,
      to: user.email,
      subject: "Welcome to Bookworm",
      text: `
      Welcome to Bookworm. Please, confirm your email.
      ${user.generateConfirmationUrl()}
      `
    };
  
    tranport.sendMail(email) .then(res => { console.log('sent', res) ; })
                             .catch(e => { console.log('not sent- ',e); });
    
  }

