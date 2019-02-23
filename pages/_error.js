import React from 'react'
import Home from '../src/components/home'
import Layout from '../src/components/Layout'

class Error extends React.Component {
	static getInitialProps ({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null
		return { statusCode }
	}

	render () {
		if (this.props.statusCode === 404) {
			return (
				<Layout
					title="Внимателно избрани висококачествени бебешки и детски продукти от iBebe.bg"
					pageHeading="Избрани продукти"
					description="iBebe.bg предлага модерни стоки и аксесоари за бебето, детето и майката - бебешки храни, детски играчки, бебешки колички, столчета за хранене и кола и още много."
					keywords="бебешки стоки, детски стоки, бебешки шишета">
					<Home />
				</Layout>
			)
		}
		return (
			<p>
				{this.props.statusCode ? (
					`An error ${this.props.statusCode} occurred on server`
				) : (
					'An error occurred on client'
				)}
			</p>
		)
	}
}

export default Error
