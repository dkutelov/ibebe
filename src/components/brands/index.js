import { withStyles } from '@material-ui/core'
//import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'

import BrandIcon from './BrandIcon'
import { brands } from '../../data/brands'

const Brands = ({ classes }) => (
	<div className={classes.root}>
		{brands.map((brand) => <BrandIcon key={brand.id} {...brand.brandIcon} />)}
		{/* <CloudinaryContext cloudName="dariku">
			<Image
				publicId="v1548513244/ibebe/walking_mum_l"
				dpr="auto"
				responsive
				width="auto"
				crop="fill"
				fetchFormat="auto"
				quality="auto"
			/>
		</CloudinaryContext> */}
	</div>
)

const styles = (theme) => ({
	root : {
		margin                       : 0,
		padding                      : '0 1em',
		display                      : 'grid',
		gridTemplateColumns          : '1fr 1fr',
		gridGap                      : '20px',
		[theme.breakpoints.up('sm')]: {
			gridTemplateColumns : '1fr 1fr 1fr',
			width               : '80%',
			margin              : '0 auto',
			maxWidth            : '1460px'
		}
	}
})

export default withStyles(styles)(Brands)
