import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import PrinceLionheart from './princelionheart/'

const Brands = ({ classes }) => {
	return (
		<div className={classes.root}>
			<Typography variant="h5" component="h1" className={classes.title}>
				Марки
			</Typography>
			<PrinceLionheart />
		</div>
	)
}

const styles = (theme) => ({
	title : {
		marginTop : '1em',
		color     : '#413852',
		textAlign : 'center'
	}
})

export default withStyles(styles)(Brands)
