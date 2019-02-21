import React, { Component } from 'react'
import { withStyles, List, ListItem } from '@material-ui/core'
import { Home } from '@material-ui/icons'
import ActiveLink from '../util/ActiveLink'
class NavBar extends Component {
	render () {
		const { classes, menuOpened, smallHeader, handleMenuClose } = this.props
		return (
			<div className={classes.root}>
				<div className={`${classes.navbar_container} ${smallHeader && classes.navbar_container_small}`}>
					<List component="nav" className={menuOpened ? classes.navbar_mobile_open : classes.navbar}>
						<ListItem
							button
							className={classes.navbarItem}
							style={{ padding: 0 }}
							onClick={handleMenuClose}>
							<ActiveLink href={`/`} applyColorChange={true} style={{ padding: 0 }}>
								<Home style={{ paddingLeft: '8px' }} />
							</ActiveLink>
						</ListItem>
						<ListItem
							button
							style={{ backgroundColor: 'transparent' }}
							variant="text"
							className={classes.navbarItem}
							onClick={handleMenuClose}>
							<ActiveLink href={`/about`} applyColorChange={true}>
								За iBebe
							</ActiveLink>
						</ListItem>
						<ListItem button className={classes.navbarItem} onClick={handleMenuClose}>
							<ActiveLink href={`/brands`} applyColorChange={true}>
								Марки
							</ActiveLink>
						</ListItem>
						<ListItem button className={classes.navbarItem} onClick={handleMenuClose}>
							<ActiveLink href={`/wheretobuy`} applyColorChange={true}>
								Къде да купя
							</ActiveLink>
						</ListItem>
						<ListItem button className={classes.navbarItem} onClick={handleMenuClose}>
							<ActiveLink href={`/contact`} applyColorChange={true}>
								Контакти
							</ActiveLink>
						</ListItem>
					</List>
				</div>
			</div>
		)
	}
}

const styles = (theme) => ({
	root                   : {
		width     : '100%',
		borderTop : '1px solid #e1e1e1',
		boxShadow : 'inset 0 -2px 12px -2px rgba(51, 51, 51, .1), inset 0 2px 12px -2px rgba(51, 51, 51, .1)'
	},
	navbar_container       : {
		height                       : '0px',
		position                     : 'relative',
		transition                   : 'all 0.3s ease-out',
		[theme.breakpoints.up('md')]: {
			height : '58px'
		}
	},
	navbar_container_small : {
		transition                   : 'all 0.3s ease-out',
		[theme.breakpoints.up('md')]: {
			height : '42px'
		}
	},
	navbar                 : {
		display                      : 'none',
		height                       : 0,
		opacity                      : 0,
		width                        : '100%',
		margin                       : '1em',
		transition                   : 'all 0.2s 0.5s ease-out',
		[theme.breakpoints.up('md')]: {
			opacity       : 1,
			height        : '100%',
			display       : 'flex',
			flexDirection : 'row',
			width         : '80%',
			margin        : '0 auto',
			paddingBottom : 0,
			paddingTop    : 0
		}
	},
	navbar_mobile_open     : {
		height                       : 'auto',
		opacity                      : 1,
		transition                   : 'all 0.2s 0.5s ease-out',
		paddingTop                   : 0,
		paddingBottom                : 0,
		position                     : 'absolute',
		zIndex                       : 10,
		left                         : '-1em',
		top                          : 0,
		backgroundColor              : '#ffffff',
		display                      : 'flex',
		flexDirection                : 'column',
		height                       : 'auto',
		width                        : '100%',
		margin                       : '5px 1em 0',
		[theme.breakpoints.up('md')]: {
			position      : 'relative',
			top           : 0,
			left          : 0,
			flexDirection : 'row',
			width         : '80%',
			margin        : '0 auto'
		}
	},
	navbarItem             : {
		width                        : 'auto',
		paddingLeft                  : '8px',
		height                       : '55px',
		borderBottom                 : '1px solid #26a9bf',
		'&:hover'                    : {
			backgroundColor : 'transparent'
		},
		'&:active'                   : {
			backgroundColor : 'transparent'
		},
		[theme.breakpoints.up('md')]: {
			borderBottom : 'none',
			paddingLeft  : '1em',
			height       : 'auto'
		}
	},
	mobile_menu_icon       : {
		paddingLeft                  : '8px',
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
