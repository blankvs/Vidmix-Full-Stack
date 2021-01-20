const nodemailer = require('nodemailer')


module.exports = {
    mailer: (req, res) => {
        const { email } = req.body
        
        const { EMAIL, PASSWORD } = process.env
        
        //Create transporter for nodemailer
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        })
        
        //Create mail options
        let mailOptions = {
            from: 'iamsenno@gmail.com',
            to: email,
            subject: 'Working',
            text: 'It works'
        }
        
        //Send email with defined transport object
        transporter.sendMail(mailOptions, function (err, res) {
            if (err) {
                console.log('Error Occurs')
            } else {
                console.log('Email sent!')
                res.status(200)
            }
        })
    }
}

