import { SheetsRegistry } from 'jss'
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
	typography : {
		useNextVariants             : true,
		suppressDeprecationWarnings : true
	},
	palette    : {
		primary   : {
			light : '#8E6CF7',
			main  : '#5e2ef4',
			dark  : '#4B24C3'
		},
		secondary : {
			light : green[300],
			main  : '#26a9bf',
			dark  : green[700]
		}
	}
})

function createPageContext () {
	return {
		theme,
		// This is needed in order to deduplicate the injection of CSS in the page.
		sheetsManager     : new Map(),
		// This is needed in order to inject the critical CSS.
		sheetsRegistry    : new SheetsRegistry(),
		// The standard class name generator.
		generateClassName : createGenerateClassName()
	}
}

let pageContext

export default function getPageContext () {
	// Make sure to create a new context for every server-side request so that data
	// isn't shared between connections (which would be bad).
	if (!process.browser) {
		return createPageContext()
	}

	// Reuse context on the client-side.
	if (!pageContext) {
		pageContext = createPageContext()
	}

	return pageContext
}
