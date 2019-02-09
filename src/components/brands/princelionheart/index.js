import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import ProductCategories from './ProductCategories'

const PrinceLionheart = ({ classes }) => {
	return (
		<div className={classes.root}>
			<div className={classes.brand_content_block}>
				<Typography variant="h1" component="h2" className={classes.brand_name}>
					Prince Lionheart
				</Typography>
				<Typography variant="body2" className={classes.brand_description}>
					Prince Lionheart /Принс Лайънхарт/ е семейна фирма, основана от Том и Линда Макконел през 1973
					година в гаража на дома им. Първият им продукт е бил люлеещо се дървено конче. С това скромно начало
					се залагат трите основни принципа, на които се гради компанията: качество, иновативност и перфектно
					обслужване. И въпреки че нещата много са се променили през последните четири десетилетия и стария
					гараж е заменен от ултра-модерен завод в Санта Мария, САЩ, тези три принципа са неразделна част от
					философията на Prince Lionheart, които в момента са един от водещите производители на бебешки
					продукти в света. В Prince Lionheart се фокусират върху реалността като създават продукти, които са
					вдъхновени от собствения им опит като родители. Например, Prince Lionheart са първите, които
					започват производство на нагревателя за мокри кърпички Baby Wipes Warmer, а мечето им за приспиване
					Tummy Sleep Plus® е единственото със запис на вътрешно-утробни звуци, които приспиват бебчетата за
					броени минути. Стремежа на фирмата е да гарантира, че всеки един от техните продукти предоставя
					най-доброто в категорията си, за да растат децата ни щастливи и здрави.
				</Typography>
			</div>
			<div className={classes.categories}>
				<Typography variant="h6" component="h2" className={classes.category_title}>
					Видове продукти
				</Typography>
				<ProductCategories />
			</div>
		</div>
	)
}

const styles = (theme) => ({
	root                : {
		borderTop       : '2px solid #e16636',
		borderBottom    : '7px solid #e16636',
		backgroundColor : '#F8F8F8',
		margin          : '3em 0',
		color           : '#413852'
	},
	brand_name          : {
		color      : '#e16636',
		fontSize   : '5em',
		margin     : '0.5em 0 .1em',
		position   : 'relative',
		marginLeft : '100px'
	},
	brand_description   : {
		border        : '7px solid #e16636',
		padding       : '1.5em',
		width         : '45%',
		lineHeight    : '1.9',
		fontSize      : '1.2em',
		letterSpacing : '1px',
		marginLeft    : '100px'
	},
	brand_content_block : {
		width              : '100%',
		borderTop          : '3px solid #8DCED5',
		borderBottom       : '5px solid #8DCED5',
		background         :
			'linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), url("/static/images/brands/plh/main.jpg") no-repeat',
		backgroundPosition : 'center center',
		backgroundSize     : 'cover',
		marginTop          : '10px',
		paddingBottom      : '20px'
	},
	categories          : {
		margin : '20px'
	},
	category_title      : {
		width         : '100%',
		textAlign     : 'center',
		paddingBottom : '1em'
	}
})

export default withStyles(styles)(PrinceLionheart)
