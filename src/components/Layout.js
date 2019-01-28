import { Fragment } from 'react'
import Head from 'next/head'

const Layout = ({ children, title, description, keywords, fullWidth }) => {
	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			<div className={`wrapper ${fullWidth ? '' : 'wrapperBoxed'}`}>{children}</div>
			<style jsx>
				{`
					.wrapper {
						width: 100%;
						padding: 160px 1em 80px 1em;
					}
					@media screen and (min-width: 800px) {
						.wrapper {
							padding: 160px 0 80px;
						}
						.wrapperBoxed {
							width: 80%;
							margin: 0 auto;
						}
					}
				`}
			</style>
		</Fragment>
	)
}

export default Layout
