import { Fragment } from 'react'
import { withStyles, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core'
import Zoom from 'react-reveal/Zoom'

const ProductCategoryListItem = ({ classes, categoryTitle, avatarURL, cetegorySubtitle, categoryDescription }) => {
	return (
		<Zoom>
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
		</Zoom>
	)
}

const styles = (theme) => ({
	inline : {
		display : 'inline'
	},
	avatar : {
		margin : 5,
		width  : 90,
		height : 90
	}
})

export default withStyles(styles)(ProductCategoryListItem)
