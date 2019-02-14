// example -> https://codesandbox.io/s/pw32vw2j3m

import React, { useState } from 'react'
import { Typography, withStyles, Button } from '@material-ui/core'
import ProductCategories from './ProductCategories'
import { makeStyles } from '@material-ui/styles'

const Brand = ({ name, description, color, borderColor, categories }) => {
	const [
		open,
		setOpen
	] = useState(false)

	const classes = useStyles({
		color
	})

	return (
		<div className={classes.root}>
			<div className={classes.brand_content_block} style={{ borderColor }}>
				<Typography variant="h1" component="h2" className={classes.brand_name}>
					{name}
				</Typography>
				<Typography
					variant="body2"
					className={
						open ? (
							`${classes.brand_description} ${classes.brand_description_open}`
						) : (
							classes.brand_description
						)
					}
					style={{ borderColor: color }}>
					{description}
					{open ? (
						''
					) : (
						<Button onClick={() => setOpen(!open)} className={classes.more_button}>
							Още
						</Button>
					)}
				</Typography>
			</div>
			<div className={classes.categories}>
				<Typography variant="h6" component="h2" className={classes.category_title}>
					Видове продукти
				</Typography>
				<ProductCategories categories={categories} />
			</div>
		</div>
	)
}

const useStyles = makeStyles({
	root : {
		borderTop       : '2px solid #e16636',
		borderBottom    : '7px solid #e16636',
		backgroundColor : '#F8F8F8',
		margin          : '3em 0',
		color           : (props) => props.color
	}
})

export default Brand

// const styles = (theme) => ({
// 	root                   : {
// 		borderTop       : '2px solid #e16636',
// 		borderBottom    : '7px solid #e16636',
// 		backgroundColor : '#F8F8F8',
// 		margin          : '3em 0',
// 		color           : '#413852'
// 	},
// 	brand_name             : {
// 		color                        : (props) => props.color,
// 		width                        : '100%',
// 		fontSize                     : '4em',
// 		margin                       : '0.5em 0 .5em',
// 		[theme.breakpoints.up('sm')]: {
// 			margin   : '0.5em 100px 0.1em auto',
// 			width    : '55%',
// 			fontSize : '5em'
// 		},
// 		[theme.breakpoints.up('md')]: {
// 			width : '45%'
// 		}
// 	},
// 	brand_description      : {
// 		position                     : 'relative',
// 		border                       : '5px solid #000',
// 		background                   : 'rgba(255, 255, 255, 0.5)',
// 		padding                      : '.5em',
// 		width                        : '100%',
// 		lineHeight                   : '1.5',
// 		fontSize                     : '1em',
// 		letterSpacing                : '1px',
// 		margin                       : '0 100px 0 auto',
// 		overflow                     : 'hidden',
// 		height                       : '305px',
// 		'&:after'                    : {
// 			position      : 'absolute',
// 			bottom        : 0,
// 			height        : '100%',
// 			width         : '100%',
// 			left          : 0,
// 			content       : '""',
// 			background    : 'linear-gradient(to top, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 40%)',
// 			pointerEvents : 'none',
// 			zIndex        : 10
// 		},
// 		[theme.breakpoints.up('sm')]: {
// 			height        : '400px',
// 			border        : '7px solid #e16636',
// 			padding       : '1.5em',
// 			width         : '55%',
// 			lineHeight    : '1.6',
// 			fontSize      : '1em',
// 			letterSpacing : '1px'
// 		},
// 		[theme.breakpoints.up('md')]: {
// 			height        : '500px',
// 			width         : '45%',
// 			lineHeight    : '1.6',
// 			fontSize      : '1em',
// 			letterSpacing : '1px'
// 		},
// 		[theme.breakpoints.up('lg')]: {
// 			height        : 'auto',
// 			lineHeight    : '1.9',
// 			fontSize      : '1.2em',
// 			letterSpacing : '1px',
// 			'&:after'     : {
// 				background : 'none'
// 			}
// 		}
// 	},
// 	brand_description_open : {
// 		height    : 'auto',
// 		'&:after' : {
// 			background : 'none'
// 		}
// 	},
// 	brand_content_block    : {
// 		width                        : '100%',
// 		borderTop                    : '3px solid #000',
// 		borderBottom                 : '5px solid #000',
// 		marginTop                    : '10px',
// 		paddingBottom                : '20px',
// 		[theme.breakpoints.up('sm')]: {
// 			background         :
// 				'linear-gradient(to right, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.9) 100%), url("https://res.cloudinary.com/dariku/image/upload/c_fill,q_auto,w_800/v1548513244/ibebe/bunny.jpg") no-repeat',
// 			backgroundPosition : 'center center',
// 			backgroundSize     : 'cover'
// 		},
// 		[theme.breakpoints.up('lg')]: {
// 			height     : 'auto',
// 			background :
// 				'linear-gradient(to right, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.9) 100%), url("https://res.cloudinary.com/dariku/image/upload/c_fill,q_auto,w_2000/v1548513244/ibebe/bunny.jpg") no-repeat'
// 		}
// 	},
// 	more_button            : {
// 		position                     : 'absolute',
// 		bottom                       : '5px',
// 		right                        : '5px',
// 		zIndex                       : 20,
// 		color                        : '#e16636',
// 		[theme.breakpoints.up('lg')]: {
// 			display : 'none'
// 		}
// 	},
// 	categories             : {
// 		margin : '20px'
// 	},
// 	category_title         : {
// 		width         : '100%',
// 		textAlign     : 'center',
// 		paddingBottom : '1em'
// 	}
// })

// export default withStyles(styles)(Brand)

// linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), url("https://res.cloudinary.com/dariku/image/upload/c_fill,q_auto,w_2000/v1548513244/ibebe/bunny.jpg") no-repeat', backgroundPosition: 'center center',

// linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), url("https://res.cloudinary.com/dariku/image/upload/c_fill,q_auto,w_2000/v1548513244/ibebe/bunny.jpg") no-repeat', backgroundPosition: 'center center',
