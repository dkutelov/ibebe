import Product from './ProductNew'

const ProductList = ({ data }) => {
	return (
		<div>
			{data.map((product, i) => (
				<Product key={product.id} product={product} layoutAlignLeft={!(i % 2)} width={6} />
			))}
		</div>
	)
}

export default ProductList
