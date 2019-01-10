import Link from 'next/link'
import { Grid, withStyles, Typography, Button } from '@material-ui/core'
import Zoom from 'react-reveal/Zoom'

// mobile

const Product = ({ product, classes, layoutAlignLeft }) => {
	const imageBoxWidth = 7
	const titleBoxWidth = 5
	const imageBox = (width) => (
		<Grid
			item
			xs={width}
			style={{ backgroundImage: `url(${product.imageURL})` }}
			className={classes.productImage}
		/>
	)

	const titleBox = (width) => (
		<Grid item xs={width} style={{ alignSelf: 'center' }}>
			<Zoom delay={300}>
				<Typography variant="h5" component="h1" style={{ color: '#413852' }}>
					{product.name}
				</Typography>
				<img src={product.brand} className={classes.brandLogo} />
				<Link href="./wheretobuy">
					<a>
						<Button variant="contained" color="primary" style={{ marginTop: '1em' }}>
							Къде да купя
						</Button>
					</a>
				</Link>
			</Zoom>
		</Grid>
	)

	return (
		<Grid container className={classes.root}>
			{layoutAlignLeft ? imageBox(imageBoxWidth) : titleBox(titleBoxWidth)}
			{layoutAlignLeft ? titleBox(titleBoxWidth) : imageBox(imageBoxWidth)}
		</Grid>
	)
}

const styles = (theme) => ({
	root         : {
		display    : 'flex',
		alignItems : 'center',
		width      : '100%',
		height     : '450px',
		margin     : '2em 0',
		border     : '1px solid #e1e1e1',
		boxShadow  : '0 2px 12px -2px rgba(51, 51, 51, .1)',
		overflow   : 'hidden',
		alignItems : 'stretch'
	},
	productImage : {
		backgroundRepeat   : 'no-repeat',
		backgroundPosition : 'center center',
		backgroundSize     : 'cover'
	},
	brandLogo    : {
		margin : '1em'
	}
})

export default withStyles(styles)(Product)
