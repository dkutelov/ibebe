const next = require('next')
const http = require('http')
const url = require('url')
const path = require('path')

const port = process.env.PORT || 7777
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()
app.prepare().then(() => {
	http
		.createServer((req, res) => {
			// parse url to get pathname or filename
			const parsedUrl = url.parse(req.url, true)
			const { pathname } = parsedUrl
			// if service worker is requested, serve it as static file
			if (pathname === '/service-worker.js') {
				const filePath = path.join(__dirname, '.next', pathname)
				app.serveStatic(req, res, filePath)
			}
			else {
				// all other we leave next to handle
				handle(req, res, parsedUrl)
			}
		})
		.listen(port, () => {
			console.log(`Listening on port ${port}`)
		})
})
