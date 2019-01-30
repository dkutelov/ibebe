import { Fragment } from 'react'
import Product from './Product'

const ProductList = ({ data }) => {
	return (
		<Fragment>
			{data.map((product, i) => (
				<Product key={product.id} product={product} layoutAlignLeft={!(i % 2)} width={6} />
			))}
		</Fragment>
	)
}

export default ProductList
