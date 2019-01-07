import React from 'react'
import { Toolbar, withStyles, Button } from '@material-ui/core'
import ActiveLink from '../util/ActiveLink'

const NavBar = ({ classes }) => {
	return (
		<div className={classes.root}>
			<Toolbar className={classes.navbar} disableGutters={true} variant="dense">
				<Button className={classes.navbarButton}>
					<ActiveLink href={`/`} applyColorChange={true}>
						Начало
					</ActiveLink>
				</Button>
				<Button style={{ backgroundColor: 'transparent' }} variant="text" className={classes.navbarButton}>
					<ActiveLink href={`/about`} applyColorChange={true}>
						За iBebe
					</ActiveLink>
				</Button>
				<Button className={classes.navbarButton}>
					<ActiveLink href={`/brands`} applyColorChange={true}>
						Марки
					</ActiveLink>
				</Button>
				<Button className={classes.navbarButton}>
					<ActiveLink href={`/buy`} applyColorChange={true}>
						Къде да купя
					</ActiveLink>
				</Button>
				<Button className={classes.navbarButton}>
					<ActiveLink href={`/contact`} applyColorChange={true}>
						Контакти
					</ActiveLink>
				</Button>
			</Toolbar>
		</div>
	)
}

const styles = (theme) => ({
	root         : {
		width     : '100%',
		borderTop : '1px solid #e1e1e1',
		boxShadow : 'inset 0 -2px 12px -2px rgba(51, 51, 51, .1), inset 0 2px 12px -2px rgba(51, 51, 51, .1)'
	},
	navbar       : {
		height                       : '47px',
		width                        : '100%',
		margin                       : '1em',
		[theme.breakpoints.up('md')]: {
			width  : '80%',
			margin : '0 auto'
		}
	},
	navbarButton : {
		'&:hover'  : {
			backgroundColor : 'transparent'
		},
		'&:active' : {
			backgroundColor : 'transparent'
		}
	}
})

export default withStyles(styles)(NavBar)
