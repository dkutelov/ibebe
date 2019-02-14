import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import Link from 'next/link'

const BrandIcon = ({ classes, brandQueryString, brandImageURL, brandImageAlt }) => {
	return (
		<div className={classes.root}>
			<Link href={`/brand?brand=${brandQueryString}`}>
				<a className={classes.brand_icon_link}>
					<picture>
						<source
							srcSet={`${brandImageURL}-sm.webp 300w, ${brandImageURL}.webp 600w`}
							type="image/webp"
							sizes="(min-width: 600px) 25vw, 50vw"
						/>
						<source
							srcSet={`${brandImageURL}-sm.jpg 300w, ${brandImageURL}.jpg 600w`}
							type="image/jpeg"
							sizes="(min-width: 600px) 25vw, 50vw"
						/>
						<img src={`${brandImageURL}.jpg`} alt={brandImageAlt} className={classes.brand_icon_image} />
					</picture>
				</a>
			</Link>
		</div>
	)
}

const styles = (theme) => ({
	root             : {
		border    : '1px solid transparent',
		'&:hover' : {
			borderColor : '#ddd'
		}
	},
	brand_icon_image : {
		maxWidth : '100%'
	},
	brand_icon_link  : {
		display     : 'block',
		position    : 'relative',
		'&::before' : {
			position        : 'absolute',
			content         : '""',
			top             : 0,
			left            : 0,
			margin          : 'auto',
			backgroundColor : 'rgba(255,255,255,0.1)',
			width           : 0,
			height          : 0,
			transition      : 'all 0.3s ease-out 0s'
		},
		'&::after'  : {
			position        : 'absolute',
			content         : '""',
			right           : 0,
			bottom          : 0,
			margin          : 'auto',
			backgroundColor : 'rgba(255,255,255,0.1)',
			width           : 0,
			height          : 0,
			transition      : 'all 0.3s ease-out 0s'
		},
		'&:hover'   : {
			'&::before' : {
				width  : '100%',
				height : '100%'
			},
			'&::after'  : {
				width  : '100%',
				height : '100%'
			}
		}
	}
})

export default withStyles(styles)(BrandIcon)
