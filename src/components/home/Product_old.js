import Link from 'next/link'
import { Grid, withStyles, Typography, Button } from '@material-ui/core'
import Zoom from 'react-reveal/Zoom'

// mobile

const Product = ({ product, classes, layoutAlignLeft, width }) => (
	<Grid container className={layoutAlignLeft ? classes.rootLeft : classes.rootRight}>
		<Grid
			item
			xs={12}
			md={width}
			style={{ backgroundImage: `url(${product.imageURL})` }}
			className={classes.productImage}
		/>
		<Grid item xs={12} md={12 - width} className={classes.productNameWrapper}>
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
	height     : '450px',
	margin     : '2em 0',
	border     : '1px solid #e1e1e1',
	boxShadow  : '0 2px 12px -2px rgba(51, 51, 51, .1)',
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
		[theme.breakpoints.down('md')]: {
			minHeight : '250px'
		}
	},
	productNameWrapper : {
		textAlign                    : 'center',
		[theme.breakpoints.up('md')]: {
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
		[theme.breakpoints.up('md')]: {
			width : 'auto'
		}
	},
	buyButton          : {
		marginBottom                 : '1em',
		[theme.breakpoints.up('md')]: {
			marginTop : '1em'
		}
	}
})

export default withStyles(styles)(Product)
