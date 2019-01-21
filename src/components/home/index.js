import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import { data } from '../../data/home'
import ProductList from './ProductList'

const Home = ({ classes }) => {
	return (
		<div>
			<Typography variant="h5" component="h1" className={classes.title}>
				Избрани продукти
			</Typography>
			<ProductList data={data} />
		</div>
	)
}

const styles = (theme) => ({
	title : {
		marginTop : '1em',
		color     : '#413852',
		textAlign : 'center'
	}
})

export default withStyles(styles)(Home)
