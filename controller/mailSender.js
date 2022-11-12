const nodemailer = require("nodemailer");

async function main( receiver,id) {
  try{
    let transporter = nodemailer.createTransport({
        host: "mail.suman-gurung.com.np",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "noreply@suman-gurung.com.np", // generated ethereal user
          pass: "@##noreply@##", // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Graphics Nepal" <noreply@suman-gurung.com.np>', // sender address
        to: "bijayagurung425@gmail.com", // list of receivers
        subject: "Job Invitation Offer", // Subject line
        text: "Dear SumanG, You have been invited to join Graphics Nepal as CEO.", // plain text body
        html: "<a href="/">CLICK HERE TO ACTIVATE YOUR ACCOUNT</a>", // html body
      });
    
  }
  catch(e){
   console.log(e)
  }
}


module.exports = main