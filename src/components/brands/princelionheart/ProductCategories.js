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
		display         : 'flex',
		width           : '100%',
		backgroundColor : theme.palette.background.paper
	}
})

export default withStyles(styles)(ProductCategories)
