import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import { data } from '../../data/home'
import ProductList from './ProductList'

const Home = ({ classes }) => {
	return (
		<div className={classes.root}>
			<Typography variant="h5" component="h1" style={{ marginTop: '1em' }}>
				Избрани продукти
			</Typography>
			<ProductList data={data} />
		</div>
	)
}

const styles = (theme) => ({
	root : {
		width                        : '100%',
		margin                       : '1em',
		[theme.breakpoints.up('md')]: {
			width  : '80%',
			margin : '0 auto'
		}
	}
})

export default withStyles(styles)(Home)
