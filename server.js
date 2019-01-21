const express = require('express')
const next = require('next')
//const http = require('http')
const url = require('url')
const path = require('path')
const sendMail = require('./sendMail')

const port = process.env.PORT || 7777
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()
app.prepare().then(() => {
	const server = express()
	server.use(express.json())

	server.post('/send-message', async (req, res) => {
		const data = req.body
		const sentEmail = await sendMail(data)
		console.log(sentEmail)
		if (sentEmail && sentEmail.messageId) {
			res.end('OK')
		}
		else {
			res.status(500).send('error')
		}
	})

	server.get('/_next/*', (req, res) => {
		handle(req, res)
	})

	server.get('/static/*', (req, res) => {
		handle(req, res)
	})

	server.get('*', (req, res) => {
		const parsedUrl = url.parse(req.url, true)
		const { pathname } = parsedUrl
		if (pathname === '/service-worker.js') {
			const filePath = path.join(__dirname, '.next', pathname)
			app.serveStatic(req, res, filePath)
		}
		else {
			handle(req, res)
		}
	})

	server.listen(port, (err) => {
		if (err) throw err
		console.log(`Server listening on ${port}`)
	})
})

// http
// 	.createServer((req, res) => {
// 		// parse url to get pathname or filename
// 		const parsedUrl = url.parse(req.url, true)
// 		const { pathname } = parsedUrl
// 		// if service worker is requested, serve it as static file
// 		if (pathname === '/service-worker.js') {
// 			const filePath = path.join(__dirname, '.next', pathname)
// 			app.serveStatic(req, res, filePath)
// 		}
// 		else {

// 			// all other we leave next to handle
// 			handle(req, res, parsedUrl)
// 		}
// 	})
// 	.listen(port, () => {
// 		console.log(`Listening on port ${port}`)
// 	})
