'use strict'
const nodemailer = require('nodemailer')

// async..await is not allowed in global scope, must use a wrapper
async function sendMail (data) {
	var transporter = nodemailer.createTransport({
		service : 'gmail',
		auth    : {
			user : process.env.EMAIL_USER,
			pass : process.env.EMAIL_PASSWORD
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
}

module.exports = sendMail
