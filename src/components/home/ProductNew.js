import Link from 'next/link'
import { Grid, withStyles, Typography, Button } from '@material-ui/core'
import { Picture } from 'react-responsive-picture'
import Zoom from 'react-reveal/Zoom'

// mobile

const Product = ({ product, classes, layoutAlignLeft, width }) => (
	<Grid container className={layoutAlignLeft ? classes.rootLeft : classes.rootRight}>
		<Grid item xs={12} sm={width}>
			<Picture
				src={`
					https://res.cloudinary.com/dariku/image/upload/c_fill,h_1000,q_auto,w_1000/v1548513244/ibebe/${product.imageFileName} 1000w,
					https://res.cloudinary.com/dariku/image/upload/c_fill,h_800,q_auto,w_800/v1548513244/ibebe/${product.imageFileName} 800w,
					https://res.cloudinary.com/dariku/image/upload/c_fill,h_500,q_auto:eco,w_500/v1548513244/ibebe/${product.imageFileName} 500w`}
				sizes="(min-width: 600px) 50vw, 100vw"
				alt={product.name}
				className={classes.image}
			/>
		</Grid>
		<Grid item xs={12} sm={12 - width} className={classes.product_details_wrapper}>
			<Zoom delay={300}>
				<Typography variant="h3" component="h2" className={classes.product_name}>
					{product.name}
				</Typography>
				<Typography variant="h4" component="h3" className={classes.product_name}>
					{product.brandName}
				</Typography>
				<Typography variant="subtitle1" className={classes.product_decription}>
					{product.description}
				</Typography>
				{/* <img src={product.brand} className={classes.brandLogo} /> */}
				<Link href="./wheretobuy">
					<a style={{ textDecoration: 'none' }}>
						<Button size="large" variant="contained" color="primary" className={classes.buy_button}>
							Къде да купя
						</Button>
					</a>
				</Link>
			</Zoom>
		</Grid>
	</Grid>
)

const rootBaseStyles = {
	width  : '100%',
	margin : '2em 0',
	border : 'none'
}

const styles = (theme) => ({
	rootLeft                : {
		...rootBaseStyles,
		flexDirection : 'row'
	},
	rootRight               : {
		...rootBaseStyles,
		flexDirection : 'row-reverse'
	},
	productImage            : {
		backgroundRepeat               : 'no-repeat',
		backgroundPosition             : 'center center',
		backgroundSize                 : 'cover',
		[theme.breakpoints.down('sm')]: {
			minHeight : '250px'
		}
	},
	image                   : {
		maxWidth : '100%'
	},
	product_details_wrapper : {
		padding                      : '0 8rem',
		[theme.breakpoints.up('sm')]: {
			alignSelf : 'center'
		}
	},
	product_name            : {
		color                        : '#413852',
		paddingTop                   : '1em',
		[theme.breakpoints.up('md')]: {
			paddingTop    : 0,
			paddingBottom : '0.5em'
		}
	},
	product_decription      : {},
	brandLogo               : {
		margin                       : '1em 0',
		width                        : '40%',
		[theme.breakpoints.up('sm')]: {
			width : 'auto'
		}
	},
	buy_button              : {
		marginBottom                 : '1em',
		borderRadius                 : '0',
		[theme.breakpoints.up('sm')]: {
			marginTop : '2em'
		}
	}
})

export default withStyles(styles)(Product)
