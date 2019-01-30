import { Fragment } from 'react'
import { Typography, withStyles } from '@material-ui/core'
import Head from 'next/head'

const Layout = ({ children, pageHeading, title, description, keywords, fullWidth, classes }) => {
	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			<div className={`wrapper ${fullWidth ? '' : 'wrapperBoxed'}`}>
				<Typography variant="h5" component="h1" className={classes.title}>
					{pageHeading}
				</Typography>
				{children}
			</div>
			<style jsx>
				{`
					.wrapper {
						width: 100%;
						padding: 160px 1em 80px 1em;
					}
					@media screen and (min-width: 800px) {
						.wrapper {
							padding: 160px 0 80px;
						}
						.wrapperBoxed {
							width: 80%;
							margin: 0 auto;
							max-width: 1350px;
						}
					}
				`}
			</style>
		</Fragment>
	)
}

const styles = (theme) => ({
	title : {
		margin    : '1.5em 0',
		fontSize  : '2rem',
		color     : '#413852',
		textAlign : 'center'
	}
})

export default withStyles(styles)(Layout)
