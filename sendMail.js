'use strict'
const nodemailer = require('nodemailer')

// async..await is not allowed in global scope, must use a wrapper
async function sendMail (data) {
	//let account = await nodemailer.createTestAccount()

	// create reusable transporter object using the default SMTP transport
	// let transporter = nodemailer.createTransport({
	// 	host   : 'smtp.ethereal.email',
	// 	port   : 587,
	// 	secure : false, // true for 465, false for other ports
	// 	auth   : {
	// 		user : account.user, // generated ethereal user
	// 		pass : account.pass // generated ethereal password
	// 	}
	// })
	var transporter = nodemailer.createTransport({
		service : 'gmail',
		auth    : {
			user : 'kgkbuk@gmail.com',
			pass : 'k9d2andi1'
		}
	})

	var mailOptions = {
		from    : '"Dariy Kutelov" <kgkbul@gmail.com>',
		to      : 'dari.k@abv.bg',
		subject : 'Запитване от ibebe.bg',
		text    : 'Има съобщение от: Име ' + data.name + ' Имейл ' + data.email + 'Message ' + data.message,
		html    :
			'<p>Има съобщение от: </p><ul><li>Име: ' +
			data.name +
			'</li><li>Имейл: ' +
			data.email +
			'</li><li>Съобщение: ' +
			data.message +
			'</li></ul>'
	}

	let info
	// send mail with defined transport object
	try {
		info = await transporter.sendMail(mailOptions)
		return info
	} catch (error) {
		console.log(error)
		return error
	}

	//console.log('Message sent: %s', info.messageId)
	// Preview only available when sending through an Ethereal account
	//console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// sendMail().catch(console.error)

module.exports = sendMail
