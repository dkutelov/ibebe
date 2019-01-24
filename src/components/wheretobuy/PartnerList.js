import { Typography } from '@material-ui/core'
import Partner from './Partner'

const PartnerList = ({ data }) => {
	return (
		<div>
			<Typography
				variant="h6"
				component="h3"
				style={{ margin: '2em 0 1.5em', textAlign: 'center', color: '#413852' }}>
				Физически и онлайн магазини
			</Typography>
			{data.map((partner) => {
				if (!partner.onlineOnly) {
					return <Partner key={partner.id} partner={partner} />
				}
			})}
		</div>
	)
}

export default PartnerList
