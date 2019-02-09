import React from 'react'
import Link from 'next/link'
import { AppBar, Grid, withStyles } from '@material-ui/core'
import { Picture } from 'react-responsive-picture'

import NavBar from '../navbar'

const Header = ({ classes }) => {
	return (
		<AppBar style={{ backgroundColor: '#fff' }}>
			<Grid container className={classes.wrapper}>
				<Grid item xs={12}>
					<Link href="/">
						<a>
							<Picture
								src={`static/images/logo-large.png 400w, static/images/logo-medium.png 300w, static/images/logo-small.png 200w`}
								sizes="(min-width: 600px) 33vw, 15vw"
								alt="лого на ibebe"
								className={classes.logo}
							/>
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
		margin                       : '1em 0',
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
