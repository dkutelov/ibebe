import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import SlideShow from './SlideShow'

const Trisiton = ({ classes }) => {
	return (
		<div className={classes.root}>
			<div className={classes.brand_name}>
				<img src={'/static/images/brands/tris/tris_logo.jpg'} />
			</div>
			<Typography variant="body2" className={classes.brand_description}>
				Tris & Ton е испанска марка с изключително функционални продукти,които правят света на дечицата
				по-цветен и забавен. Мисията на компанията е да създава висококачествени продукти, с иновативен и весел
				дизайн, в който са вложени много креативност и жизнерадостни цветове. Освен, че са много удобни,
				продуктите на Tris & Ton се отличават с това, че създават много настроение и положителни емоции за
				родителите и техните деца. Всички продукти на Tris & Ton са създадени и изработени в Испания от
				високотехнологични и качествени материали, и са преминали през всички необходими тестове за безопасност
				на ЕС.
			</Typography>
			<div className={classes.main_image} />
			<SlideShow>
				<img src="/static/images/brands/tris/tris_slider_1.jpg" alt="Trisyton одеалце" />
				<img src="/static/images/brands/tris/tris_slider_2.jpg" alt="Trisyton одеалце" />
				<img src="/static/images/brands/tris/tris_slider_3.jpg" alt="Trisyton одеалце" />
			</SlideShow>
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
		position        : 'relative',
		height          : '800px'
	},
	brand_name        : {
		color    : '#e16636',
		fontSize : '5em',
		margin   : '.5em 0 1em',
		position : 'relative',
		zIndex   : '20'
	},
	brand_description : {
		width         : '50%',
		lineHeight    : '1.7',
		fontSize      : '1em',
		letterSpacing : '1px',
		position      : 'absolute',
		left          : '30px',
		zIndex        : '15'
	},
	main_image        : {
		width              : '70%',
		borderTop          : '3px solid #8DCED5',
		borderBottom       : '5px solid #8DCED5',
		height             : '500px',
		background         :
			'linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), url("/static/images/brands/tris/tris_banner.jpg") no-repeat',
		backgroundPosition : 'center center',
		backgroundSize     : 'cover',
		position           : 'absolute',
		top                : '30px',
		right              : '0px',
		zIndex             : '10'
	}
})

export default withStyles(styles)(Trisiton)
