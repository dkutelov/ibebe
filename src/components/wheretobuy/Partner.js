import { Card, Typography, CardContent, Button, CardActions, withStyles } from '@material-ui/core'
import PartnerMap from './PartnerMap'

const Partner = ({ partner, classes }) => {
	return (
		<Card className={classes.card}>
			<CardContent className={classes.cardColumn}>
				<div className={classes.logoContainer}>
					<a href={partner.siteURL} target="_blank">
						<img className={classes.logo} src={partner.logoURL} alt={`Лого на ${partner.name}`} />
					</a>
				</div>
			</CardContent>
			<CardContent className={classes.cardColumn}>
				<Typography component="h2" variant="h5" style={{ margin: '1em 0 0.5em 0', color: '#413852' }}>
					{partner.name}
				</Typography>
				<Typography variant="body1" style={{ color: '#413852' }}>
					Адрес: {partner.address}
				</Typography>
				<Typography
					component="h3"
					variant="subtitle1"
					color="textSecondary"
					style={{ margin: '0.5em 0 0.25em 0', fontWeight: 'bold' }}>
					За контакти:
				</Typography>
				<Typography variant="body2" style={{ color: '#413852' }}>
					тел.: {partner.phones} <br />
					Работно време: {partner.workingTime} <br />
					Онлайн магазин: {partner.siteURL}
				</Typography>
				<CardActions>
					<a href={partner.siteURL} className={classes.buyButtonContainer} target="_blank">
						<Button size="large" variant="contained" color="primary" className={classes.buyButton}>
							Пазарувай
						</Button>
					</a>
				</CardActions>
			</CardContent>
			{/* check if coordinates exist */}
			<CardContent className={classes.cardColumn}>
				<PartnerMap lat={partner.position.lat} lng={partner.position.lng} name={partner.name} />
			</CardContent>
		</Card>
	)
}

const styles = (theme) => ({
	card               : {
		display                      : 'flex',
		justifyContent               : 'space-between',
		flexDirection                : 'column',
		marginBottom                 : '1em',
		[theme.breakpoints.up('md')]: {
			flexDirection : 'row',
			marginBottom  : '2em'
		}
	},
	details            : {
		display       : 'flex',
		flexDirection : 'column'
	},
	cardColumn         : {
		flex    : '1 0 30%',
		padding : '0 !important'
	},
	logoContainer      : {
		display    : 'flex',
		alignItems : 'center',
		height     : '100%'
	},
	logo               : {
		height   : '80px',
		maxWidth : '100%',
		padding  : '0 4em'
	},
	buyButtonContainer : {
		textDecoration : 'none',
		display        : 'block',
		margin         : '0 auto',
		paddingRight   : '2em'
	},
	buyButton          : {
		margin       : '1em 0',
		borderRadius : '0 !important'
	}
})

export default withStyles(styles)(Partner)
