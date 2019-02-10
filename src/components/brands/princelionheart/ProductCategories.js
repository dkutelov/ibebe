import { withStyles, List } from '@material-ui/core'
import { data } from '../../../data/PLHcat'
import ProductCategorieslistItem from './ProductCategorieslistItem'

const ProductCategories = ({ classes }) => {
	return (
		<List className={classes.root}>
			{data.map((category) => <ProductCategorieslistItem key={category.id} {...category} />)}
		</List>
	)
}

const styles = (theme) => ({
	root : {
		display                      : 'grid',
		gridTemplateColumns          : '1fr',
		backgroundColor              : theme.palette.background.paper,
		[theme.breakpoints.up('sm')]: {
			gridTemplateColumns : '1fr 1fr'
		},
		[theme.breakpoints.up('lg')]: {
			gridTemplateColumns : '1fr 1fr 1fr 1fr'
		}
	}
})

export default withStyles(styles)(ProductCategories)
