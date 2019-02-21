import { Card, Typography, CardContent, Button, CardActions, withStyles } from '@material-ui/core'
import PartnerMap from './PartnerMap'

const Partner = ({ partner, classes }) => {
	return (
		<Card className={classes.card}>
			<CardContent className={classes.cardColumn}>
				<div className={classes.logoContainer}>
					<a href={partner.siteURL} target="_blank" style={{ width: '100%', textAlign: 'center' }}>
						<img className={classes.logo} src={partner.logoURL} alt={`Лого на ${partner.name}`} />
					</a>
				</div>
			</CardContent>
			<CardContent className={classes.cardColumn}>
				<div className={classes.details_wrapper}>
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
					<CardActions style={{ padding: '8px 4px 16px' }}>
						<a href={partner.siteURL} className={classes.buyButtonContainer} target="_blank">
							<Button size="large" variant="contained" color="primary" className={classes.buyButton}>
								Пазарувай
							</Button>
						</a>
					</CardActions>
				</div>
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
		margin                       : '0 1em 1em',
		[theme.breakpoints.up('md')]: {
			flexDirection : 'row',
			margin        : '0 0 2em'
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
		display                      : 'flex',
		alignItems                   : 'center',
		height                       : '100%',
		width                        : '100%',
		paddingTop                   : '1.5em',
		paddingBottom                : '1em',
		[theme.breakpoints.up('md')]: {
			padding : 0
		}
	},
	logo               : {
		height   : '80px',
		maxWidth : '100%',
		margin   : '0 auto'
	},
	details_wrapper    : {
		padding                      : '0 1em',
		[theme.breakpoints.up('md')]: {
			padding : '0 0 0 1em'
		}
	},
	buyButtonContainer : {
		textDecoration               : 'none',
		display                      : 'block',
		margin                       : '0 auto',
		padding                      : 0,
		width                        : '80%',
		[theme.breakpoints.up('md')]: {
			padding : '0 1em 0 0',
			width   : '60%'
		}
	},
	buyButton          : {
		width        : '100%',
		margin       : '1em 0',
		borderRadius : '0 !important'
	}
})

export default withStyles(styles)(Partner)
