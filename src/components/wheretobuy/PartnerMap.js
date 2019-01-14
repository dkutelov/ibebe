import GoogleMapReact from 'google-map-react'
import Place from '@material-ui/icons/Place'

const Marker = () => <Place color="secondary" fontSize="large" />
const PartnerName = ({ name }) => (
	<h2
		style={{
			color: '#762E61',
			marginTop: '-1.5em',
			width: '200px',
			transform: 'translateX(-50%)',
			textAlign: 'center'
		}}>
		{name}
	</h2>
)

const PartnerMap = ({ lat, lng, name }) => {
	const center = [
		lat,
		lng
	]
	const zoom = 15
	return (
		<div style={{ height: '300px', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyAbBSz9ZdcjSHWP5g_2f6J3VnczJ1hz2ZY' }}
				defaultCenter={center}
				defaultZoom={zoom}>
				<Marker lat={lat} lng={lng} />
				<PartnerName lat={lat} lng={lng} name={name} />
			</GoogleMapReact>
		</div>
	)
}

export default PartnerMap
