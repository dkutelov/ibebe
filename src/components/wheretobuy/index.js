import { Typography, withStyles } from '@material-ui/core'

import { data } from '../../data/partner'
import PartnerList from './PartnerList'
import OnlinePartnersList from './OnlinePartnersList'

const WhereToBuy = ({ classes }) => {
	return (
		<div>
			<Typography variant="h5" component="h2" className={classes.title}>
				Нашите парньори
			</Typography>
			<PartnerList data={data} />
			<OnlinePartnersList data={data} />
		</div>
	)
}

const styles = (theme) => ({
	title : {
		marginTop     : '1em',
		marginBottom  : '1em',
		color         : '#413852',
		textAlign     : 'center',
		textTransform : 'uppercase'
	}
})

export default withStyles(styles)(WhereToBuy)
