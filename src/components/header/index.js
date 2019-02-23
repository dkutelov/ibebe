import React, { Component } from 'react'
import Link from 'next/link'
import { Grid, withStyles } from '@material-ui/core'
import { Picture } from 'react-responsive-picture'

import NavBar from '../navbar'
import MenuIcon from '../util/MenuIcon'

class Header extends Component {
	state = {
		smallHeader : false,
		menuOpened  : false
	}

	componentDidMount () {
		window.addEventListener('scroll', this.handleHeader)
	}

	componentWillUnmount () {
		window.removeEventListener('scroll', this.handleHeader)
	}

	handleHeader = (event) => {
		if (window.scrollY > 15) {
			this.setState({ smallHeader: true })
		}
		else {
			this.setState({ smallHeader: false })
		}
	}

	handleMenuOpen = () => {
		this.setState((prevState) => ({
			menuOpened : !prevState.menuOpened
		}))
	}

	handleMenuClose = () => {
		this.setState((prevState) => ({
			menuOpened : false
		}))
	}

	render () {
		const { classes } = this.props
		const { smallHeader, menuOpened } = this.state
		return (
			<div className={classes.root}>
				<Grid container className={classes.wrapper}>
					<Grid item xs={12}>
						<div
							onClick={this.handleMenuOpen}
							className={!smallHeader ? classes.menu_icon_wrapper : classes.menu_icon_wrapperSmall}>
							<MenuIcon color="#26a9bf" size="39px" menuOpened={menuOpened} />
						</div>
						<Link href="/">
							<a>
								<Picture
									src={`static/images/logo-large.png 400w, static/images/logo-medium.png 300w, static/images/logo-small.png 200w`}
									sizes="(min-width: 600px) 33vw, 15vw"
									alt="лого на ibebe"
									className={!smallHeader ? classes.logo : classes.logoSmall}
								/>
							</a>
						</Link>
					</Grid>
				</Grid>
				{/* <div className={classes.navTopBorder} /> */}
				<NavBar menuOpened={menuOpened} smallHeader={smallHeader} handleMenuClose={this.handleMenuClose} />
				<div className={classes.headerBottomBorder} />
			</div>
		)
	}
}
const styles = (theme) => ({
	root                   : {
		position        : 'fixed',
		zIndex          : 100,
		top             : 0,
		left            : 0,
		width           : '100vw',
		backgroundColor : '#fff',
		boxShadow       :
			'0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
	},
	logo                   : {
		width                        : '125px',
		padding                      : '0.5em 0',
		margin                       : '0 auto',
		display                      : 'block',
		transition                   : 'all 0.3s ease-out',
		[theme.breakpoints.up('md')]: {
			width   : '200px',
			padding : '1em 0',
			margin  : '0'
		}
	},
	logoSmall              : {
		width                        : '75px',
		padding                      : '0',
		margin                       : '0 auto',
		display                      : 'block',
		transition                   : 'all 0.3s ease-out',
		[theme.breakpoints.up('md')]: {
			width   : '100px',
			padding : '1em 0',
			margin  : '0'
		}
	},
	wrapper                : {
		width                        : '100%',
		margin                       : '1em 0',
		[theme.breakpoints.up('md')]: {
			display : 'block',
			width   : '80%',
			margin  : '0 auto'
		}
	},
	navTopBorder           : {
		width        : '100%',
		height       : '10px',
		boxShadow    : '0 -3px 12px -2px rgba(51, 51, 51, .1) inset',
		borderBottom : '1px solid #e1e1e1'
	},
	headerBottomBorder     : {
		width           : '100%',
		height          : '6px',
		border          : 'none',
		backgroundImage :
			'linear-gradient(to right, #ff4014, #ff40e6, #a740ff, #5642ff, #4ef3f3, #52ff11, #fdfd0f, #ff4014)'
	},
	menu_icon_wrapper      : {
		position   : 'absolute',
		top        : '25px',
		left       : '25px',
		transition : 'all 0.3s ease-out'
	},
	menu_icon_wrapperSmall : {
		position   : 'absolute',
		top        : '10px',
		left       : '10px',
		transition : 'all 0.3s ease-out'
	}
})

export default withStyles(styles)(Header)
