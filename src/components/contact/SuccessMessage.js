import Link from 'next/link'
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Fade,
	Button,
	withStyles
} from '@material-ui/core'
import VerifiedUserTwoTone from '@material-ui/icons/VerifiedUserTwoTone'

function Transition (props) {
	return <Fade in={true} {...props} />
}

const SuccessMessage = ({ openSuccess, classes }) => {
	return (
		<Dialog open={openSuccess} disableBackdropClick={true} TransitionComponent={Transition}>
			<DialogTitle>
				<VerifiedUserTwoTone className={classes.icon} />
				Успешно изпратено!
			</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Вашето съобщение беше изпратено успешно! Ще ви отговорим при първа възможност!
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button color="primary" variant="contained">
					<Link href="/">
						<a className={classes.signinLink}>OK</a>
					</Link>
				</Button>
			</DialogActions>
		</Dialog>
	)
}

const styles = (theme) => ({
	signinLink : {
		textDecoration : 'none',
		color          : 'white'
	},
	icon       : {
		padding       : '0px 2px 2px 0px',
		verticalAlign : 'middle',
		color         : 'green',
		marginRight   : '.5em'
	}
})

export default withStyles(styles)(SuccessMessage)
