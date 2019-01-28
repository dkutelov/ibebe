/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from '../src/components/Layout'
import Contact from '../src/components/contact'

const ContactPage = () => (
	<Layout
		title="Форма за контакт с iBebe.bg"
		description="Не се колебайте да ни пишете по всякакви въпроси, свързани с марките, които предлагаме, този сайт или други въпроси, които ви вълнуват"
		keywords="контакт, ibebe.bg"
		fullWidth={true}>
		<Contact />
	</Layout>
)

export default ContactPage
