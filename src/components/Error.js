import React, { Component } from 'react'
import { withRouter } from 'next/router'

class Error extends Component {
	componentDidMount () {
		const { router } = this.props
		router.prefetch('/')
	}

	render () {
		const { statusCode } = this.props
		const { router } = this.props

		if (statusCode === 404) {
			router.push('/', { shallow: true })
		}
		return (
			<div>
				<h1>Съжаляавме възникнала е грешка!</h1>
				<p>Код: {statusCode}</p>
			</div>
		)
	}
}

export default withRouter(Error)
