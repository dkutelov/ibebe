import Partner from './Partner'

const PartnerList = ({ data }) => {
	return <div>{data.map((partner) => <Partner key={partner.id} partner={partner} />)}</div>
}

export default PartnerList
