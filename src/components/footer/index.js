import React from 'react'
import { Grid, withStyles } from '@material-ui/core'

const Footer = ({ classes }) => {
	return (
		<footer>
			<Grid container className={classes.wrapper}>
				<Grid item xs={12}>
					<span>Copyright 2009 iBebe.com. All rights reserved.</span>
				</Grid>
			</Grid>
			<div className={classes.footerBottomBorder} />
		</footer>
	)
}

const styles = (theme) => ({
	logo               : {
		width                        : '125px',
		padding                      : '0.5em 0',
		margin                       : '0 auto',
		display                      : 'block',
		[theme.breakpoints.up('md')]: {
			width   : '200px',
			padding : '1em 0',
			margin  : '0'
		}
	},
	wrapper            : {
		width                        : '100%',
		margin                       : '1em',
		[theme.breakpoints.up('md')]: {
			width  : '80%',
			margin : '0 auto'
		}
	},
	headerBottomBorder : {
		width           : '100 %',
		height          : '6px',
		border          : 'none',
		backgroundImage :
			'linear-gradient(to right, #ff4014, #ff40e6, #a740ff, #5642ff, #4ef3f3, #52ff11, #fdfd0f, #ff4014)'
	}
})

export default withStyles(styles)(Footer)
