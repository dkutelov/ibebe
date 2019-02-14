import React from 'react'
import App, { Container } from 'next/app'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from '../src/getPageContext'
import NProgress from 'next-nprogress/component'
import Header from '../src/components/header'
import Footer from '../src/components/footer'
class MyApp extends App {
	constructor () {
		super()
		this.pageContext = getPageContext()
	}

	componentDidMount () {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles && jssStyles.parentNode) {
			jssStyles.parentNode.removeChild(jssStyles)
		}
	}

	render () {
		const { Component, pageProps } = this.props
		return (
			<Container>
				{/* Wrap every page in Jss and Theme providers */}
				<JssProvider
					registry={this.pageContext.sheetsRegistry}
					generateClassName={this.pageContext.generateClassName}>
					{/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
					<MuiThemeProvider theme={this.pageContext.theme} sheetsManager={this.pageContext.sheetsManager}>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						{/* Pass pageContext to the _document though the renderPage enhancer
				to render collected styles on server-side. */}
						<Header />
						<Component pageContext={this.pageContext} {...pageProps} />
						<Footer />
					</MuiThemeProvider>
				</JssProvider>
				<NProgress color="#26a9bf" options={{ trickleSpeed: 50 }} showAfterMs={100} spinner={true} />
				<style global jsx>
					{`
						body {
							color: #413852;
							margin: 0;
						}
					`}
				</style>
			</Container>
		)
	}
}

export default MyApp
