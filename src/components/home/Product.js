//import Link from 'next/link'
import { Grid, withStyles, Typography, Button } from '@material-ui/core'
import { Picture } from 'react-responsive-picture'
import Zoom from 'react-reveal/Zoom'

// mobile

const Product = ({ product, classes, layoutAlignLeft }) => (
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
					https://res.cloudinary.com/dariku/image/upload/c_fill,h_1200,q_auto,f_auto,w_1200/v1548513244/ibebe/${product.imageFileName} 1200w,
					https://res.cloudinary.com/dariku/image/upload/c_fill,h_900,q_auto,f_auto,w_900/v1548513244/ibebe/${product.imageFileName} 900w,
					https://res.cloudinary.com/dariku/image/upload/c_fill,h_500,q_auto:eco,f_auto,w_500/v1548513244/ibebe/${product.imageFileName} 500w`}
				sizes="(min-width: 600px) 40vw, 90vw"
				alt={product.name}
				className={classes.image}
			/>
		</div>
		<div className={classes.product_details_wrapper}>
			<Zoom delay={100}>
				<Typography variant="h3" component="h2" className={classes.product_name}>
					{product.name}
				</Typography>
				<Typography variant="h4" component="h3" className={classes.brand_name}>
					{product.brandName}
				</Typography>
				<Typography variant="subtitle1" className={classes.product_decription}>
					{product.description}
				</Typography>
				<a href={product.linkToBuy} style={{ textDecoration: 'none' }}>
					<Button size="large" variant="contained" color="primary" className={classes.buy_button}>
						Къде да купя
					</Button>
				</a>
			</Zoom>
		</div>
	</Grid>
)

const styles = (theme) => ({
	rootBaseStyles          : {
		width          : '100%',
		margin         : 0,
		lineHeight     : 1,
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
		height                       : '100%',
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
		paddingTop                   : '5px',
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
		margin                       : '0.25em 0 0.75em',
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
		marginTop                    : '1.75em',
		marginBottom                 : '1.4em',
		borderRadius                 : '0',
		[theme.breakpoints.up('sm')]: {
			marginTop : '2em'
		}
	}
})

export default withStyles(styles)(Product)
