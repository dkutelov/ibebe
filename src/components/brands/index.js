import { withStyles } from '@material-ui/core'

import BrandIcon from './BrandIcon'
import { brands } from '../../data/brands'

const Brands = ({ classes }) => (
	<div className={classes.root}>{brands.map((brand) => <BrandIcon key={brand.id} {...brand.brandIcon} />)}</div>
)

const styles = (theme) => ({
	root : {
		margin                       : 0,
		width                        : '100%',
		display                      : 'grid',
		gridTemplateColumns          : '1fr 1fr',
		gridGap                      : '20px',
		[theme.breakpoints.up('sm')]: {
			gridTemplateColumns : '1fr 1fr 1fr',
			width               : '95%',
			margin              : '0 auto',
			maxWidth            : '1460px'
		},
		[theme.breakpoints.up('lg')]: {
			gridTemplateColumns : '1fr 1fr 1fr 1fr'
		}
	}
})

export default withStyles(styles)(Brands)
