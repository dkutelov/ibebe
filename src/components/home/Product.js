import { Grid, withStyles, Hidden, Typography } from '@material-ui/core'

//left, right
// mobile
// effects

const Product = ({ product, classes }) => {
	return (
		<Grid container className={classes.root}>
			<Grid item xs={7}>
				<img src={product.imageURL} alt={product.name} className={classes.productImage} />
			</Grid>
			<Grid item xs={5}>
				<Typography variant="h5" component="h1">
					{product.name}
				</Typography>
				<img src={product.brand} className={classes.brandLogo} />
			</Grid>
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
		overflow   : 'hidden'
	},
	productImage : {
		width : '100%'
	},
	brandLogo    : {
		margin : '1em'
	}
})

export default withStyles(styles)(Product)
