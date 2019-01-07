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
	}

	// asPath is the string if we use 'as' to rename the path
	const isCurrentPath = router.pathname === href || router.asPath === href

	return (
		<div>
			<a
				href={href}
				onClick={handleClick}
				className={isCurrentPath && applyColorChange ? classes.linkActive : classes.linkNotActive}>
				{children}
			</a>
		</div>
	)
}

const baseLinkStyles = {
	color          : '#762E61',
	textTransform  : 'uppercase',
	fontSize       : '1.1rem',

	textDecoration : 'none',
	margin         : 0,
	padding        : '0 1em',
	'&:hover'      : {
		color : '#26a9bf'
	}
}

const styles = (theme) => ({
	linkNotActive : {
		...baseLinkStyles,
		fontWeight : '300'
	},
	linkActive    : {
		...baseLinkStyles,
		fontWeight : '500'
	}
})

const StyledActiveLink = withStyles(styles)(ActiveLink)

export default withRouter(StyledActiveLink)
