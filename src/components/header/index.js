import React from 'react'
import Link from 'next/link'
import { AppBar, Grid, withStyles } from '@material-ui/core'
import NavBar from '../navbar'

const Header = ({ classes }) => {
	return (
		<AppBar style={{ backgroundColor: '#fff' }}>
			<Grid container className={classes.wrapper}>
				<Grid item xs={12}>
					<Link href="/">
						<a>
							<img src="./static/images/logo.png" alt="logo" className={classes.logo} />
						</a>
					</Link>
				</Grid>
			</Grid>
			{/* <div className={classes.navTopBorder} /> */}
			<NavBar />
			<div className={classes.headerBottomBorder} />
		</AppBar>
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
	navTopBorder       : {
		width        : '100%',
		height       : '10px',
		boxShadow    : '0 -3px 12px -2px rgba(51, 51, 51, .1) inset',
		borderBottom : '1px solid #e1e1e1'
	},
	headerBottomBorder : {
		width           : '100 %',
		height          : '6px',
		border          : 'none',
		backgroundImage :
			'linear-gradient(to right, #ff4014, #ff40e6, #a740ff, #5642ff, #4ef3f3, #52ff11, #fdfd0f, #ff4014)'
	}
})

export default withStyles(styles)(Header)
