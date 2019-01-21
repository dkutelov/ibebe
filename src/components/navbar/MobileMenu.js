import React, { Component } from 'react'

import { Menu as MenuIcon, Home } from '@material-ui/icons'
import { Button, Menu, MenuItem, Fade } from '@material-ui/core'

class MobileMenu extends Component {
	state = {
		anchorEl : null
	}

	handleClick = (event) => {
		this.setState({ anchorEl: event.currentTarget })
	}

	handleClose = () => {
		this.setState({ anchorEl: null })
	}

	render () {
		const { anchorEl } = this.state
		const open = Boolean(anchorEl)
		console.log(anchorEl)

		return (
			<div>
				<Button aria-owns={open ? 'fade-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
					<MenuIcon />
				</Button>
				<Menu
					id="fade-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={this.handleClose}
					TransitionComponent={Fade}>
					<MenuItem onClick={this.handleClose}>
						<Home />
					</MenuItem>
					<MenuItem onClick={this.handleClose}>My account</MenuItem>
					<MenuItem onClick={this.handleClose}>Logout</MenuItem>
				</Menu>
			</div>
		)
	}
}

export default MobileMenu
