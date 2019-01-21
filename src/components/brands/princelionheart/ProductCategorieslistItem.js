import { Fragment } from 'react'
import { withStyles, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core'

const ProductCategoryListItem = ({ classes, categoryTitle, avatarURL, cetegorySubtitle, categoryDescription }) => {
	return (
		<ListItem alignItems="flex-start">
			<ListItemAvatar>
				<Avatar alt={categoryTitle} src={avatarURL} className={classes.avatar} />
			</ListItemAvatar>
			<ListItemText
				primary={categoryTitle}
				secondary={
					<Fragment>
						<Typography component="span" className={classes.inline} color="textPrimary">
							{cetegorySubtitle}
						</Typography>
						<br />
						{categoryDescription}
					</Fragment>
				}
			/>
		</ListItem>
	)
}

const styles = (theme) => ({
	inline : {
		display : 'inline'
	},
	avatar : {
		margin : 5,
		width  : 70,
		height : 70
	}
})

export default withStyles(styles)(ProductCategoryListItem)
