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
		<Grid item xs={12} sm={12 - width} className={classes.productNameWrapper}>
			<Zoom delay={300}>
				<Typography variant="h5" component="h1" className={classes.productName}>
					{product.name}
				</Typography>
				<img src={product.brand} className={classes.brandLogo} />
				<Link href="./wheretobuy">
					<a style={{ textDecoration: 'none' }}>
						<Button variant="contained" color="primary" className={classes.buyButton}>
							Къде да купя
						</Button>
					</a>
				</Link>
			</Zoom>
		</Grid>
	</Grid>
)

const rootBaseStyles = {
	display    : 'flex',
	width      : '100%',
	margin     : '2em 0',
	border     : 'none',
	overflow   : 'hidden',
	alignItems : 'stretch'
}

const styles = (theme) => ({
	rootLeft           : {
		...rootBaseStyles,
		flexDirection : 'row'
	},
	rootRight          : {
		...rootBaseStyles,
		flexDirection : 'row-reverse'
	},
	productImage       : {
		backgroundRepeat               : 'no-repeat',
		backgroundPosition             : 'center center',
		backgroundSize                 : 'cover',
		[theme.breakpoints.down('sm')]: {
			minHeight : '250px'
		}
	},
	image              : {
		maxWidth : '100%'
	},
	productNameWrapper : {
		textAlign                    : 'center',
		[theme.breakpoints.up('sm')]: {
			alignSelf : 'center'
		}
	},
	productName        : {
		color                        : '#413852',
		fontSize                     : '1.1rem',
		paddingTop                   : '1em',
		[theme.breakpoints.up('md')]: {
			fontSize      : '1.5rem',
			paddingTop    : 0,
			paddingBottom : '0.5em'
		}
	},
	brandLogo          : {
		margin                       : '1em',
		width                        : '70%',
		[theme.breakpoints.up('sm')]: {
			width : 'auto'
		}
	},
	buyButton          : {
		marginBottom                 : '1em',
		[theme.breakpoints.up('sm')]: {
			marginTop : '1em'
		}
	}
})

export default withStyles(styles)(Product)
