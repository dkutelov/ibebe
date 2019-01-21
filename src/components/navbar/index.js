import React, { Component } from 'react'
import { Toolbar, withStyles, Button, List, ListItem, Typography } from '@material-ui/core'
import { Menu as MenuIcon, Home } from '@material-ui/icons'
import ActiveLink from '../util/ActiveLink'
import { isAbsolute } from 'path'

class NavBar extends Component {
	state = {
		open : false
	}

	toggleOpen = () => {
		this.setState((prevState) => ({
			open : !prevState.open
		}))
	}
	render () {
		const { classes } = this.props
		const { open } = this.state
		return (
			<div className={classes.root}>
				<Toolbar className={classes.navbar_container}>
					<MenuIcon color="secondary" className={classes.mobile_menu_icon} onClick={this.toggleOpen} />
					<List component="nav" className={open ? classes.navbar_mobile_open : classes.navbar}>
						<ListItem
							button
							className={classes.navbarItem}
							style={{ padding: 0 }}
							onClick={this.toggleOpen}>
							<ActiveLink href={`/`} applyColorChange={true} style={{ padding: 0 }}>
								<Home />
							</ActiveLink>
						</ListItem>
						<ListItem
							button
							style={{ backgroundColor: 'transparent' }}
							variant="text"
							className={classes.navbarItem}
							onClick={this.toggleOpen}>
							<ActiveLink href={`/about`} applyColorChange={true}>
								За iBebe
							</ActiveLink>
						</ListItem>
						<ListItem button className={classes.navbarItem} onClick={this.toggleOpen}>
							<ActiveLink href={`/brands`} applyColorChange={true}>
								Марки
							</ActiveLink>
						</ListItem>
						<ListItem button className={classes.navbarItem} onClick={this.toggleOpen}>
							<ActiveLink href={`/wheretobuy`} applyColorChange={true}>
								Къде да купя
							</ActiveLink>
						</ListItem>
						<ListItem button className={classes.navbarItem} onClick={this.toggleOpen}>
							<ActiveLink href={`/contact`} applyColorChange={true}>
								Контакти
							</ActiveLink>
						</ListItem>
					</List>
				</Toolbar>
			</div>
		)
	}
}

const styles = (theme) => ({
	root               : {
		width     : '100%',
		borderTop : '1px solid #e1e1e1',
		boxShadow : 'inset 0 -2px 12px -2px rgba(51, 51, 51, .1), inset 0 2px 12px -2px rgba(51, 51, 51, .1)'
	},
	navbar_container   : {
		height   : '47px',
		position : 'relative'
	},
	navbar             : {
		display                      : 'none',
		width                        : '100%',
		margin                       : '1em',
		[theme.breakpoints.up('md')]: {
			display       : 'flex',
			flexDirection : 'row',
			width         : '80%',
			margin        : '0 auto'
		}
	},
	navbar_mobile_open : {
		position                     : 'absolute',
		left                         : '-1em',
		top                          : '45px',
		backgroundColor              : '#ffffff',
		display                      : 'flex',
		flexDirection                : 'column',
		height                       : 'auto',
		width                        : '100%',
		margin                       : '1em',
		[theme.breakpoints.up('md')]: {
			position      : 'relative',
			top           : 0,
			left          : 0,
			flexDirection : 'row',
			width         : '80%',
			margin        : '0 auto'
		}
	},
	navbarItem         : {
		width      : 'auto',
		'&:hover'  : {
			backgroundColor : 'transparent'
		},
		'&:active' : {
			backgroundColor : 'transparent'
		}
	},
	mobile_menu_icon   : {
		[theme.breakpoints.up('md')]: {
			display : 'none'
		}
	}
})

export default withStyles(styles)(NavBar)
//	< Toolbar className = { classes.navbar } disableGutters = { true} variant = "dense" >
// 	< Button
// style = {{ backgroundColor: 'transparent' }}
// variant = "text"
// className = { classes.navbarButton } >
// 	<ActiveLink href={`/about`} applyColorChange={true}>
// 		За iBebe
// 							</ActiveLink>
// 						</Button >
// 	<Button className={classes.navbarButton}>
// 		<ActiveLink href={`/brands`} applyColorChange={true}>
// 			Марки
// 							</ActiveLink>
// 	</Button>
// 	<Button className={classes.navbarButton}>
// 		<ActiveLink href={`/wheretobuy`} applyColorChange={true}>
// 			Къде да купя
// 							</ActiveLink>
// 	</Button>
// 	<Button className={classes.navbarButton}>
// 		<ActiveLink href={`/contact`} applyColorChange={true}>
// 			Контакти
// 							</ActiveLink>
// 	</Button>
