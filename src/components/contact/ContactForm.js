import React, { Component } from 'react'
import { TextField, Button, withStyles } from '@material-ui/core'

class ContactForm extends Component {
	changeHandler = (name, e) => {
		e.persist()
		this.props.handleChange(e)
		this.props.setFieldTouched(name, true, false)
	}

	render () {
		const {
			values       : { name, email, message },
			errors,
			touched,
			isValid,
			handleSubmit,
			handleBlur,
			classes
		} = this.props
		return (
			<form className={classes.form} onSubmit={handleSubmit}>
				<TextField
					className={classes.margin}
					InputLabelProps={{
						classes : {
							root    : classes.cssLabel,
							focused : classes.cssFocused
						}
					}}
					InputProps={{
						classes : {
							underline : classes.cssUnderline
						}
					}}
					id="name"
					label="Име"
					name="name"
					fullWidth
					value={name}
					onChange={this.changeHandler.bind(null, 'name')}
					onBlur={handleBlur}
					helperText={touched.name ? errors.name : ''}
					error={touched.name && Boolean(errors.name)}
				/>
				<TextField
					className={classes.margin}
					InputLabelProps={{
						classes : {
							root    : classes.cssLabel,
							focused : classes.cssFocused
						}
					}}
					InputProps={{
						classes : {
							underline : classes.cssUnderline
						}
					}}
					id="email"
					label="Имейл"
					name="email"
					fullWidth
					value={email}
					onChange={this.changeHandler.bind(null, 'email')}
					onBlur={handleBlur}
					helperText={touched.email ? errors.email : ''}
					error={touched.email && Boolean(errors.email)}
				/>
				<TextField
					multiline
					rows="4"
					className={classes.margin_outlined}
					InputLabelProps={{
						classes : {
							root    : classes.cssLabel,
							focused : classes.cssFocused
						}
					}}
					InputProps={{
						classes : {
							root           : classes.cssOutlinedInput,
							focused        : classes.cssFocused,
							notchedOutline : classes.notchedOutline
						}
					}}
					id="message"
					label="Съобщение"
					name="message"
					fullWidth
					value={message}
					onChange={this.changeHandler.bind(null, 'message')}
					onBlur={handleBlur}
					helperText={touched.message ? errors.message : ''}
					error={touched.message && Boolean(errors.message)}
					variant="outlined"
				/>
				<div className={classes.button_wrapper}>
					<Button
						className={classes.send_button}
						type="submit"
						variant="contained"
						fullWidth={false}
						color="secondary"
						disabled={!isValid}>
						Изпрати
					</Button>
				</div>
			</form>
		)
	}
}
const styles = (theme) => ({
	form             : {
		width : '80%'
	},
	margin           : {
		margin : `${theme.spacing.unit}px 1px`,
		height : '68px'
	},
	margin_outlined  : {
		margin : `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit}px`
	},
	cssLabel         : {
		'&$cssFocused' : {
			color : theme.palette.primary.main
		}
	},
	cssFocused       : {},
	cssUnderline     : {
		'&:after' : {
			borderBottomColor : theme.palette.primary.main
		}
	},
	cssOutlinedInput : {
		'&$cssFocused $notchedOutline' : {
			borderColor : theme.palette.primary.main
		}
	},
	notchedOutline   : {},
	button_wrapper   : {
		textAlign : 'center'
	},
	send_button      : {
		margin       : '2em auto',
		paddingLeft  : '1.5em',
		paddingRight : '1.5em'
	}
})
export default withStyles(styles)(ContactForm)
