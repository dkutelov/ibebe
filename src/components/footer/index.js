import React from 'react'
import { Grid, withStyles } from '@material-ui/core'

const Footer = ({ classes }) => {
	return (
		<footer className={classes.footer}>
			<div className={classes.footer_border_top} />
			<Grid container className={classes.wrapper}>
				<Grid item xs={12}>
					<span>&copy; 2009 ibebe.bg. Всички права запазени.</span>
				</Grid>
			</Grid>
		</footer>
	)
}

const styles = (theme) => ({
	footer            : {
		position   : 'relative',
		background : '#fff',
		bottom     : 0
	},
	wrapper           : {
		width                        : '100%',
		margin                       : '1em',
		padding                      : '2em 0',
		[theme.breakpoints.up('md')]: {
			width  : '80%',
			margin : '0 auto'
		}
	},
	footer_border_top : {
		width           : '100%',
		height          : '2px',
		border          : 'none',
		backgroundImage :
			'linear-gradient(to right, #ff4014, #ff40e6, #a740ff, #5642ff, #4ef3f3, #52ff11, #fdfd0f, #ff4014)'
	}
})

export default withStyles(styles)(Footer)
