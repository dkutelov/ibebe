import Product from './Product'

const ProductList = ({ data }) => {
	return <div>{data.map((product) => <Product key={product.id} product={product} />)}</div>
}

export default ProductList
