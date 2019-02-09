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
			<div className={fullWidth ? `${classes.wrapper}` : `${classes.wrapper} ${classes.wrapperBoxed}`}>
				{pageHeading && (
					<Typography variant="h5" component="h1" className={classes.title}>
						{pageHeading}
					</Typography>
				)}
				{children}
			</div>
		</Fragment>
	)
}

const styles = (theme) => ({
	wrapper      : {
		width                        : '100%',
		padding                      : '167px 1em 80px 1em',
		[theme.breakpoints.up('sm')]: {
			padding : '167px 0 80px'
		}
	},
	wrapperBoxed : {
		[theme.breakpoints.up('sm')]: {
			width    : '80%',
			margin   : '0 auto',
			maxWidth : '1350px'
		}
	},
	title        : {
		margin                       : '1em 0',
		fontSize                     : '2rem',
		color                        : '#413852',
		textAlign                    : 'center',
		[theme.breakpoints.up('sm')]: {
			margin : '1.5em 0'
		}
	}
})

export default withStyles(styles)(Layout)
