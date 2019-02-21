import React from 'react'
import PropTypes from 'prop-types'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

class MyDocument extends Document {
	render () {
		const { pageContext } = this.props
		return (
			<html lang="bg" dir="ltr">
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
					<meta name="robots" content="index, follow" />
					<meta name="theme-color" content={pageContext ? pageContext.theme.palette.primary.main : null} />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500&amp;subset=cyrillic-ext"
					/>
					<meta name="author" content="Dariy Kutelov" />
					<link rel="manifest" href="/static/manifest.json" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="application-name" content="ibebe" />
					<meta name="apple-mobile-web-app-title" content="ibebe" />
					<meta name="theme-color" content="#A24B86" />
					<meta name="msapplication-navbutton-color" content="#A24B86" />
					<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
					<meta name="msapplication-starturl" content="/" />
					<link rel="icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png" />
					<link
						rel="apple-touch-icon"
						type="image/png"
						sizes="512x512"
						href="/static/icons/icon-512x512.png"
					/>
					<link rel="icon" type="image/png" sizes="192x192" href="/static/icons/icon-192x192.png" />
					<link
						rel="apple-touch-icon"
						type="image/png"
						sizes="192x192"
						href="/static/icons/icon-192x192.png"
					/>
					<link rel="icon" type="image/png" sizes="128x128" href="/static/icons/icon-128x128.png" />
					<link
						rel="apple-touch-icon"
						type="image/png"
						sizes="128x128"
						href="/static/icons/icon-128x128.png"
					/>
					<link rel="icon" type="image/png" sizes="144x144" href="/static/icons/icon-144x144.png" />
					<link
						rel="apple-touch-icon"
						type="image/png"
						sizes="144x144"
						href="/static/icons/icon-144x144.png"
					/>
					<link rel="icon" type="image/png" sizes="72x72" href="/static/icons/icon-72x72.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="72x72" href="/static/icons/icon-72x72.png" />
					<link rel="icon" type="image/png" sizes="96x96" href="/static/icons/icon-96x96.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="96x96" href="/static/icons/icon-96x96.png" />
					<link rel="icon" type="image/png" sizes="152x152" href="/static/icons/icon-152x152.png" />
					<link
						rel="apple-touch-icon"
						type="image/png"
						sizes="152x152"
						href="/static/icons/icon-152x152.png"
					/>
					<link rel="icon" type="image/png" sizes="384x384" href="/static/icons/icon-384x384.png" />
					<link
						rel="apple-touch-icon"
						type="image/png"
						sizes="384x384"
						href="/static/icons/icon-384x384.png"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}

MyDocument.getInitialProps = (ctx) => {
	// Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render

	// Render app and page and get the context of the page with collected side effects.
	let pageContext
	const page = ctx.renderPage((Component) => {
		const WrappedComponent = (props) => {
			pageContext = props.pageContext
			return <Component {...props} />
		}

		WrappedComponent.propTypes = {
			pageContext : PropTypes.object.isRequired
		}

		return WrappedComponent
	})

	let css
	// It might be undefined, e.g. after an error.
	if (pageContext) {
		css = pageContext.sheetsRegistry.toString()
	}

	return {
		...page,
		pageContext,
		// Styles fragment is rendered after the app and page rendering finish.
		styles      : (
			<React.Fragment>
				<style
					id="jss-server-side"
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: css }}
				/>
				{flush() || null}
			</React.Fragment>
		)
	}
}

export default MyDocument
