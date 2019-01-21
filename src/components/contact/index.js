/* eslint-disable jsx-a11y/anchor-is-valid */
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Typography, Avatar, Paper, withStyles } from '@material-ui/core'
import { Mail } from '@material-ui/icons'
import ContactForm from './ContactForm'
import axios from 'axios'
import SuccessMessage from './SuccessMessage'

const validationSchema = Yup.object({
	name    : Yup.string('Въведете име!')
		.required('Име е задължително поле!')
		.min(4, 'Името трябва да е поне 4 символа!')
		.max(40, 'Името не трябва да е по-дълго от 40 символа'),
	email   : Yup.string('Въведете имейл!').email('Въведете валиден имейл!').required('Имейл е задължително поле!'),
	message : Yup.string('Въведете съобщение!')
		.required('Съобщение е задължително поле!')
		.min(10, 'Съобщението трябва да е поне 10 символа!')
		.max(500, 'Съобщението не трябва да е по-дълго от 500 символа.')
})

class Contact extends React.Component {
	state = {
		openSuccess : false
	}
	handleSubmit = async ({ name, email, message }) => {
		const data = { name, email, message }

		try {
			const res = await axios.post('/send-message', data)
			if (res.status === 200 && res.data === 'OK') {
				this.setState({ openSuccess: true })
			}
		} catch (error) {
			const errorMessage = 'Възникна грешка. Вашето съобщение не беше изпратено успешно! Опитайте отново'
			console.log(errorMessage, errorMessage)
		}
	}
	render () {
		const { classes } = this.props
		const { openSuccess } = this.state
		const values = { name: 'dariy', email: 'dari.k@abv.bg', message: 'The is a test message.' }
		return (
			<div>
				<Typography variant="h5" component="h1" className={classes.title}>
					За контакти
				</Typography>
				<Typography variant="body2" style={{ textAlign: 'center', marginTop: '2em' }}>
					Пишете ни за всякакви въпроси, които ви вълнуват.
				</Typography>
				<Paper className={classes.paper}>
					<Avatar className={classes.avatar}>
						<Mail color="primary" />
					</Avatar>
					<Formik
						render={(props) => <ContactForm {...props} />}
						initialValues={values}
						validationSchema={validationSchema}
						onSubmit={this.handleSubmit}
					/>
				</Paper>
				<SuccessMessage openSuccess={openSuccess} />
			</div>
		)
	}
}

const styles = (theme) => ({
	title  : {
		marginTop : '1em',
		color     : '#413852',
		textAlign : 'center'
	},
	paper  : {
		width                        : 'auto',
		marginTop                    : theme.spacing.unit * 8,
		display                      : 'flex',
		flexDirection                : 'column',
		alignItems                   : 'center',
		padding                      : theme.spacing.unit * 2,
		[theme.breakpoints.up('md')]: {
			width       : '60%',
			marginLeft  : 'auto',
			marginRight : 'auto'
		}
	},
	avatar : {
		margin          : theme.spacing.unit,
		backgroundColor : 'transparent',
		border          : `none`
	},
	form   : {
		width     : '100%',
		marginTop : theme.spacing.unit
	}
})

export default withStyles(styles)(Contact)
