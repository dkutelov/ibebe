import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import { data } from '../../data/home'
import ProductList from './ProductList'

const Home = ({ classes }) => {
	return <ProductList data={data} />
}

const styles = (theme) => ({
	title : {
		margin    : '1.5em 0',
		fontSize  : '2rem',
		color     : '#413852',
		textAlign : 'center'
	}
})

export default withStyles(styles)(Home)
