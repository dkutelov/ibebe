import { Fragment } from 'react'
import { data } from '../../data/partner'
import PartnerList from './PartnerList'
import OnlinePartnersList from './OnlinePartnersList'

const WhereToBuy = () => {
	return (
		<Fragment>
			<PartnerList data={data} />
			<OnlinePartnersList data={data} />
		</Fragment>
	)
}

export default WhereToBuy
