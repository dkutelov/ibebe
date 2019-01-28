/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from '../src/components/Layout'
import Brands from '../src/components/brands'

const BrandsPage = () => (
	<Layout
		title="Марки бебешки и детски стоки, предлагани от iBebe.bg"
		description="iBebe.bg предлага внимателно избрани марки като Prince Lionheart, Luvion, Tris @ Ton, Walkinkmum, Twistshake, MiniMonkey."
		keywords="Prince Lionheart, Luvion, Tris @ Ton, Walkinkmum, Twistshake, MiniMonkey"
		fullWidth={true}>
		<Brands />
	</Layout>
)

export default BrandsPage
