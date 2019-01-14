import { Card, Typography, CardContent, CardMedia, withStyles } from '@material-ui/core'
import PartnerMap from './PartnerMap'

const Partner = ({ partner, classes }) => {
	return (
		<Card className={classes.card}>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography component="h5" variant="h5">
						{partner.name}
					</Typography>
					<Typography variant="subtitle1" color="textSecondary">
						more text and link
					</Typography>
					<CardMedia className={classes.logo} image={partner.logoURL} title="Live from space album cover" />
				</CardContent>
			</div>
			{/* check if coordinates exist */}
			<PartnerMap lat={partner.position.lat} lng={partner.position.lng} name={`Магазин ${partner.name}`} />
		</Card>
	)
}

const styles = (theme) => ({
	card    : {
		display        : 'flex',
		justifyContent : 'space-between;'
	},
	details : {
		display       : 'flex',
		flexDirection : 'column'
	},
	content : {
		flex : '1 0 auto'
	},
	logo    : {
		width : '100px'
	}
})

export default withStyles(styles)(Partner)
