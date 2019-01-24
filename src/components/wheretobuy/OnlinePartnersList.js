import { Typography, Grid, withStyles } from '@material-ui/core'

const OnlinePartnersList = ({ data, classes }) => {
	return (
		<Grid>
			<Typography
				variant="h6"
				component="h3"
				style={{ margin: '2em 0 1.5em', textAlign: 'center', color: '#413852' }}>
				Онлайн магазини
			</Typography>
			<Grid container className={classes.root} spacing={16}>
				{data.map((partner) => {
					if (partner.onlineOnly) {
						return (
							<Grid item xs={12} md={4} className={classes.online_partner} key={partner.id}>
								<div className={classes.online_partner_inner}>
									<a href={partner.siteURL} target="_blank" className={classes.online_partner_link}>
										<img
											src={partner.logoURL}
											alt={partner.name}
											className={classes.online_partner_logo}
										/>
									</a>
								</div>
							</Grid>
						)
					}
				})}
			</Grid>
		</Grid>
	)
}

const styles = (theme) => ({
	root                 : {
		flexGrow : 1
	},
	online_partner       : {
		height : '17em'
	},
	online_partner_inner : {
		padding         : '0 !important',
		width           : '100%',
		height          : '100%',
		border          : '1px solid #f2f2f2',
		transition      : 'all .3s ease',
		borderRadius    : '4px',
		backgroundColor : '#ffffff',
		'&:hover'       : {
			border    : '1px solid #ddd',
			boxShadow : '0 6px 14px -6px rgba(0,0,0,.4)'
		}
	},
	online_partner_logo  : {
		maxWidth : '60%'
	},
	online_partner_link  : {
		width          : '100%',
		height         : '100%',
		display        : 'flex',
		alignItems     : 'center',
		justifyContent : 'center'
	}
})

export default withStyles(styles)(OnlinePartnersList)
