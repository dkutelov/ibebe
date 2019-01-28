import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import ProductCategories from './ProductCategories'

const PrinceLionheart = ({ classes }) => {
	return (
		<div className={classes.root}>
			<div className={classes.main_image}>
				<Typography variant="h1" component="h2" className={classes.brand_name}>
					Prince Lionheart
				</Typography>
				<Typography variant="body2" className={classes.brand_description}>
					Prince Lionheart е семейна фирма, основана от Том и Линда Макконел през 1973 година в Санта Мария,
					САЩ. И така, вече 43 години в Prince Lionheart създават продукти за улеснение на родителите. Фирмата
					е семейна, управлява се в семейството и се вдъхновява от него за новите си продукти, тъй като
					истинското гледане на деца съществено се различава от безгрижното и идеално родителство, което
					виждаме по телевизията. В Prince Lionheart се фокусират върху реалността като създават продукти,
					които са вдъхновени от собствения им опит като родители.
				</Typography>
			</div>
			<div className={classes.categories}>
				<Typography variant="h6" component="h2">
					Категории продукти
				</Typography>
				<ProductCategories />
			</div>
		</div>
	)
}

const styles = (theme) => ({
	root              : {
		borderTop       : '2px solid #e16636',
		borderBottom    : '7px solid #e16636',
		backgroundColor : '#F8F8F8',
		margin          : '3em 0',
		color           : '#413852',
		position        : 'relative'
	},
	brand_name        : {
		color    : '#e16636',
		fontSize : '5em',
		margin   : '0.5em 0 .1em',
		position : 'relative',
		left     : '100px',
		zIndex   : '20'
	},
	brand_description : {
		border        : '7px solid #e16636',
		padding       : '1.5em',
		width         : '35%',
		lineHeight    : '1.9',
		fontSize      : '1.2em',
		letterSpacing : '1px',
		position      : 'absolute',
		left          : '100px',
		zIndex        : '15'
	},
	main_image        : {
		width              : '100',
		borderTop          : '3px solid #8DCED5',
		borderBottom       : '5px solid #8DCED5',
		height             : '700px',
		background         :
			'linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), url("/static/images/brands/plh/main.jpg") no-repeat',
		backgroundPosition : 'center center',
		backgroundSize     : 'cover',
		position           : 'relative',
		top                : '10px',
		right              : '0px',
		zIndex             : '10'
	},
	categories        : {
		position : 'relative',
		left     : '100px',
		top      : '10px',
		zIndex   : '20'
	}
})

export default withStyles(styles)(PrinceLionheart)
