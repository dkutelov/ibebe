import Link from 'next/link'
import { Grid, withStyles, Typography, Button } from '@material-ui/core'
import { Picture } from 'react-responsive-picture'
import Zoom from 'react-reveal/Zoom'

// mobile

const Product = ({ product, classes, layoutAlignLeft, width }) => (
	<Grid
		container
		className={
			layoutAlignLeft ? (
				`${classes.rootBaseStyles} ${classes.rootLeft}`
			) : (
				`${classes.rootBaseStyles} ${classes.rootRight}`
			)
		}>
		<div className={classes.image_wrapper}>
			<Picture
				src={`
					https://res.cloudinary.com/dariku/image/upload/c_fill,h_1000,q_auto,w_1000/v1548513244/ibebe/${product.imageFileName} 1000w,
					https://res.cloudinary.com/dariku/image/upload/c_fill,h_800,q_auto,w_800/v1548513244/ibebe/${product.imageFileName} 800w,
					https://res.cloudinary.com/dariku/image/upload/c_fill,h_500,q_auto:eco,w_500/v1548513244/ibebe/${product.imageFileName} 500w`}
				sizes="(min-width: 600px) 50vw, 100vw"
				alt={product.name}
				className={classes.image}
			/>
		</div>
		<div className={classes.product_details_wrapper}>
			<Zoom delay={300}>
				<Typography variant="h3" component="h2" className={classes.product_name}>
					{product.name}
				</Typography>
				<Typography variant="h4" component="h3" className={classes.brand_name}>
					{product.brandName}
				</Typography>
				<Typography variant="subtitle1" className={classes.product_decription}>
					{product.description}
				</Typography>
				<Link href="./wheretobuy">
					<a style={{ textDecoration: 'none' }}>
						<Button size="large" variant="contained" color="primary" className={classes.buy_button}>
							Къде да купя
						</Button>
					</a>
				</Link>
			</Zoom>
		</div>
	</Grid>
)

const styles = (theme) => ({
	rootBaseStyles          : {
		width          : '100%',
		margin         : '2em 0',
		border         : 'none',
		flexWrap       : 'nowrap',
		justifyContent : 'space-between'
	},
	rootLeft                : {
		flexDirection                : 'column',
		[theme.breakpoints.up('md')]: {
			flexDirection : 'row'
		}
	},
	rootRight               : {
		flexDirection                : 'column',
		[theme.breakpoints.up('md')]: {
			flexDirection : 'row-reverse'
		}
	},
	image_wrapper           : {
		width                        : '100%',
		maxWidth                     : '100%',
		[theme.breakpoints.up('md')]: {
			width : '50%'
		}
	},
	image                   : {
		width                        : '100%',
		[theme.breakpoints.up('md')]: {
			maxWidth : '100%'
		}
	},
	product_details_wrapper : {
		padding                      : '1em',
		textAlign                    : 'center',
		[theme.breakpoints.up('md')]: {
			width          : '23rem',
			display        : 'flex',
			flexDirection  : 'column',
			justifyContent : 'center',
			margin         : 'auto',
			textAlign      : 'left'
		},
		[theme.breakpoints.up('lg')]: {
			width : '28rem'
		}
	},
	product_name            : {
		color                        : '#413852',
		fontSize                     : '2rem',
		[theme.breakpoints.up('sm')]: {
			paddingTop : '1em'
		},
		[theme.breakpoints.up('md')]: {
			fontSize      : '3rem',
			paddingTop    : 0,
			paddingBottom : '0.5em'
		}
	},
	brand_name              : {
		margin                       : '0.5em 0',
		color                        : '#413852',
		fontSize                     : '1.5rem',
		[theme.breakpoints.up('md')]: {
			fontSize      : '2.125rem',
			paddingBottom : '0.5em',
			margin        : '0'
		}
	},
	product_decription      : {
		lineHeight                   : '1.5',
		[theme.breakpoints.up('md')]: {
			lineHeight : '1.75'
		}
	},
	buy_button              : {
		marginTop                    : '1em',
		marginBottom                 : '1em',
		borderRadius                 : '0',
		[theme.breakpoints.up('sm')]: {
			marginTop : '2em'
		}
	}
})

export default withStyles(styles)(Product)
