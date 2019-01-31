import { Component } from 'react'
import { data } from '../../data/home'
import ProductList from './ProductList'

class Home extends Component {
	state = {
		products : []
	}
	componentDidMount () {
		const shaffledProducts = this.shaffleProducts(data)
		this.setState({ products: shaffledProducts })
	}
	componentWillUnmount () {
		this.setState({ products: [] })
	}
	shaffleProducts = (products) => {
		products.forEach((product, index) => {
			const randomIndex = Math.floor(Math.random() * (index + 1))
			const temp = products[index]
			products[index] = products[randomIndex]
			products[randomIndex] = temp
		})
		return products
	}
	render () {
		return <ProductList data={this.state.products} />
	}
}

export default Home
