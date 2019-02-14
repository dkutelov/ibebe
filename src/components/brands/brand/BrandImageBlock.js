import React, { useState } from 'react'
import { Typography, withStyles } from '@material-ui/core'
import { Picture } from 'react-responsive-picture'

const BrandBlock = ({ classes, largeImage, smallImage, subheadline, content }) => (
	<div className={classes.root}>
		<div className={classes.image_wrapper}>
			<div className={classes.brand_image_large}>
				<Picture
					src={`
					https://res.cloudinary.com/dariku/image/upload/c_fill,q_auto,w_1500/v1548513244/ibebe/${largeImage} 1500w,
					https://res.cloudinary.com/dariku/image/upload/c_fill,q_auto,w_500/v1548513244/ibebe/${largeImage} 500w`}
					sizes="66vw"
					alt="brand image"
					style={{ maxWidth: '100%' }}
				/>
			</div>
			<div className={classes.brand_image_small}>
				<Picture
					src={`
					https://res.cloudinary.com/dariku/image/upload/c_fill,q_auto,w_1000/v1548513244/ibebe/${smallImage} 10000w,
					https://res.cloudinary.com/dariku/image/upload/c_fill,q_auto,w_500/v1548513244/ibebe/${smallImage} 500w`}
					sizes="33vw"
					alt="brand image"
					className={classes.brand_image}
				/>
			</div>
		</div>
		<div className={classes.content_wrapper}>
			<Typography component="h4" className={classes.content_title}>
				{subheadline}
			</Typography>
			<div className={classes.content_divider} />
			<p className={classes.content}>{content}</p>
		</div>
	</div>
)

const styles = (theme) => ({
	root              : {
		display        : 'flex',
		flexDirection  : 'row',
		justifyContent : 'center',
		marginTop      : '55px'
	},
	image_wrapper     : {
		position  : 'relative',
		flexBasis : '60%',
		maxWidth  : '60%',
		textAlign : 'center'
	},
	content_wrapper   : {
		flexBasis                    : '40%',
		maxWidth                     : '40%',
		marginTop                    : 0,
		[theme.breakpoints.up('lg')]: {
			paddingTop  : '3%',
			paddingLeft : '5%'
		}
	},
	brand_image_large : {
		position    : 'relative',
		zIndex      : 1,
		'&::before' : {
			content  : '""',
			position : 'absolute',
			top      : '13%',
			right    : 0,
			bottom   : '-12%',
			left     : '18%',
			zIndex   : -1,
			width    : '88%',
			border   : '8px solid rgba(162,75,134,.5)'
		}
	},
	brand_image_small : {
		display                      : 'none',
		[theme.breakpoints.up('md')]: {
			display  : 'block',
			position : 'absolute',
			zIndex   : 2,
			bottom   : '-23%',
			right    : '-26%'
		}
	},
	content_title     : {
		fontWeight                   : 400,
		fontSize                     : '2rem',
		lineHeight                   : '1.2',
		letterSpacing                : '.075em',
		textTransform                : 'none',
		[theme.breakpoints.up('lg')]: {
			paddingLeft : '10%'
		}
	},
	content_divider   : {
		width                        : '60px',
		height                       : '2px',
		margin                       : '17px auto 12px 0',
		background                   : '#A24B86',
		[theme.breakpoints.up('lg')]: {
			marginTop    : '27px',
			marginBottom : '22px',
			marginLeft   : '10%'
		}
	},
	content           : {
		fontSize                     : '1rem',
		lineHeight                   : 1.9,
		letterSpacing                : '0.05em',
		[theme.breakpoints.up('lg')]: {
			paddingLeft : '10%'
		}
	}
})

export default withStyles(styles)(BrandBlock)
