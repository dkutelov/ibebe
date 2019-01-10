import Product from './Product'

const ProductList = ({ data }) => {
	return (
		<div>{data.map((product, i) => <Product key={product.id} product={product} layoutAlignLeft={!(i % 2)} />)}</div>
	)
}

export default ProductList
