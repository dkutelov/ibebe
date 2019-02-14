/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from '../src/components/Layout'
import Brand from '../src/components/brands/brand'

const BrandPage = () => (
	<Layout
		title="Марки бебешки и детски стоки, предлагани от iBebe.bg"
		description="iBebe.bg предлага внимателно избрани марки като Prince Lionheart, Luvion, Tris @ Ton, Walkinkmum, Twistshake, MiniMonkey."
		fullWidth={true}>
		<Brand />
	</Layout>
)

export default BrandPage
