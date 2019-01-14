import { Typography, withStyles } from '@material-ui/core'

import { data } from '../../data/partner'
import PartnerList from './PartnerList'
const WhereToBuy = ({ classes }) => {
	return (
		<div>
			<Typography variant="h5" component="h1" className={classes.title}>
				Парньори
			</Typography>
			<PartnerList data={data} />
		</div>
	)
}

const styles = (theme) => ({
	title : {
		marginTop    : '1em',
		marginBottom : '1em',
		color        : '#413852',
		textAlign    : 'center'
	}
})

export default withStyles(styles)(WhereToBuy)
