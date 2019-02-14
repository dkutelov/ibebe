import { Component } from 'react'
import { withRouter } from 'next/router'

import BrandContent from './BrandContent'
import { brands } from '../../../data/brands'

export class Brand extends Component {
	state = {
		brandData : {}
	}
	componentDidMount () {
		const brandQueryString = this.props.router.query.brand
		const [
			brandData
		] = brands.filter((brand) => brand.brandIcon.brandQueryString === brandQueryString)
		this.setState({ brandData })
	}
	render () {
		const { brandData } = this.state
		return <BrandContent {...brandData} />
	}
}

export default withRouter(Brand)
