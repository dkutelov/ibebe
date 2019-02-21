import React, { useState } from 'react'
import { Typography, withStyles, Button } from '@material-ui/core'
import ProductCategories from './ProductCategories'
import BrandImageBlock from './BrandImageBlock'
import { ExpandMore, ExpandLess } from '@material-ui/icons'

const Brand = ({ classes, name, description, titleColor, borderColor, categories, imageBlock }) => {
	const [
		open,
		setOpen
	] = useState(false)

	return (
		<div className={classes.root} style={{ borderColor: titleColor }}>
			<div className={classes.brand_content_block} style={{ borderColor }}>
				<div className={classes.brand_content_wrapper}>
					<Typography
						variant="h1"
						component="h2"
						className={classes.brand_name}
						style={{ color: titleColor }}>
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
						}>
						{description}
					</Typography>
					{open ? (
						<div className={classes.more_button_wrapper}>
							<ExpandLess onClick={() => setOpen(!open)} className={classes.more_button} />
						</div>
					) : (
						<div className={classes.more_button_wrapper}>
							<ExpandMore onClick={() => setOpen(!open)} className={classes.more_button} />
						</div>
					)}
					<BrandImageBlock {...imageBlock} />
				</div>
			</div>
			{categories &&
			categories.length && (
				<div className={`${classes.brand_content_wrapper} ${classes.categories}`}>
					<Typography variant="h6" component="h2" className={classes.category_title}>
						Разнообразни продукти
					</Typography>
					{name && <ProductCategories categories={categories} />}
				</div>
			)}
		</div>
	)
}

const styles = (theme) => ({
	root                   : {
		borderTop                    : '2px solid #000',
		borderBottom                 : '7px solid #000',
		backgroundColor              : '#F8F8F8',
		margin                       : '3em 0',
		color                        : '#413852',
		[theme.breakpoints.up('sm')]: {
			padding : '0 16px'
		},
		[theme.breakpoints.up('md')]: {
			padding : '0 0 3em 0'
		}
	},
	brand_name             : {
		fontSize                     : '5em',
		margin                       : '.5em 0 0.25em',
		padding                      : '0 1rem',
		[theme.breakpoints.up('md')]: {
			padding : '0 2rem'
		},
		[theme.breakpoints.up('lg')]: {
			padding : 0
		}
	},
	brand_description      : {
		position                     : 'relative',
		padding                      : '.5em 1em',
		lineHeight                   : '1.9',
		fontSize                     : '1em',
		letterSpacing                : '0.05px',
		margin                       : '1em 0 0',
		color                        : '#413852',
		height                       : '325px',
		overflow                     : 'hidden',
		'&:after'                    : {
			position      : 'absolute',
			bottom        : 0,
			height        : '100%',
			width         : '100%',
			left          : 0,
			content       : '""',
			background    : 'linear-gradient(to top, rgba(248,248,248, 0.7) 0%, rgba(248,248,248, 0) 40%)',
			pointerEvents : 'none',
			zIndex        : 10
		},
		[theme.breakpoints.up('sm')]: {
			height : '350px'
		},
		[theme.breakpoints.up('md')]: {
			margin    : '1em 0 2em',
			height    : 'auto',
			padding   : '0 2em',
			'&:after' : {
				background : 'none'
			}
		},
		[theme.breakpoints.up('lg')]: {
			padding : 0
		}
	},
	brand_description_open : {
		height    : 'auto',
		'&:after' : {
			background : 'none'
		}
	},
	brand_content_block    : {
		width                        : '100%',
		borderTop                    : '3px solid #000',
		borderBottom                 : '5px solid #000',
		marginTop                    : '10px',
		paddingBottom                : '25px',
		[theme.breakpoints.up('sm')]: {
			paddingBottom : '40px'
		},
		[theme.breakpoints.up('md')]: {
			paddingBottom : '110px'
		},
		[theme.breakpoints.up('lg')]: {
			paddingBottom : '200px'
		}
	},
	brand_content_wrapper  : {
		margin                       : 0,
		padding                      : 0,
		[theme.breakpoints.up('md')]: {
			width    : '95%',
			maxWidth : '1467px',
			margin   : '0 auto'
		}
	},
	more_button_wrapper    : {
		textAlign    : 'right',
		paddingRight : '2em'
	},
	more_button            : {
		background                   : 'rgb(258,258,258,0.9)',
		borderRadius                 : '5px',
		width                        : '1.75em',
		height                       : '1.25em',
		fontSize                     : '32px',
		[theme.breakpoints.up('md')]: {
			display : 'none'
		}
	},
	categories             : {
		margin                       : '30px 0 30px 0',
		padding                      : '0 16px',
		// [theme.breakpoints.up('md')]: {
		// 	margin  : '30px 0 30px 0',
		// 	padding : '0 16px'
		// },
		[theme.breakpoints.up('md')]: {
			padding : 0,
			margin  : '30px auto'
		}
	},
	category_title         : {
		width                        : '100%',
		textAlign                    : 'center',
		paddingBottom                : '1em',
		[theme.breakpoints.up('md')]: {
			paddingBottom : '2em'
		}
	}
})

export default withStyles(styles)(Brand)
