import { withRouter } from 'next/router'
import { withStyles } from '@material-ui/core'

const ActiveLink = ({ router, href, applyColorChange, children, classes }) => {
	;(function prefetchPages () {
		if (typeof window !== 'undefined') {
			router.prefetch(router.pathname)
		}
	})()

	const handleClick = (event) => {
		event.preventDefault()
		router.push(href)
		router.prefetch(href)
	}

	// asPath is the string if we use 'as' to rename the path
	const isCurrentPath = router.pathname === href || router.asPath === href

	return (
		<a
			href={href}
			onClick={handleClick}
			className={isCurrentPath && applyColorChange ? classes.linkActive : classes.linkNotActive}>
			{children}
		</a>
	)
}

const baseLinkStyles = {
	color          : '#762E61',
	textTransform  : 'uppercase',
	fontSize       : '1.1rem',
	width          : '100%',
	height         : '100%',
	textDecoration : 'none',
	margin         : 0,
	padding        : '0 1.5em',
	fontWeight     : '300',
	display        : 'flex',
	alignItems     : 'center',
	'&:hover'      : {
		color : '#26a9bf'
	}
}

const styles = (theme) => ({
	linkNotActive : {
		...baseLinkStyles
	},
	linkActive    : {
		...baseLinkStyles,
		color : '#808080'
	}
})

const StyledActiveLink = withStyles(styles)(ActiveLink)

export default withRouter(StyledActiveLink)
