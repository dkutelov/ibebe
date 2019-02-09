import React, { Component } from 'react'
import { Typography, withStyles } from '@material-ui/core'
import { Picture } from 'react-responsive-picture'

class About extends Component {
	state = {
		scrollPosY : 0
	}
	componentDidMount () {
		window.addEventListener('scroll', this.handleScrollPositionY)
	}

	componentWillUnmount () {
		window.removeEventListener('scroll', this.handleScrollPositionY)
		this.setState({ scrollPosY: 0 })
	}

	handleScrollPositionY = (event) => {
		this.setState({ scrollPosY: window.scrollY })
	}

	handleParralax = () => {
		const { scrollPosY } = this.state
		const parallaxPos = scrollPosY * -0.5
		const translateString = `translate3d(0, ${parallaxPos}px, 0)`
		return { transform: translateString }
	}

	render () {
		const { classes } = this.props

		return (
			<div className={classes.root}>
				<Picture
					src={`
					https://res.cloudinary.com/dariku/image/upload/c_fill,q_auto,w_3000/v1548513244/ibebe/aboutus.jpg 3000w,
					https://res.cloudinary.com/dariku/image/upload/c_fill,q_auto,w_2000/v1548513244/ibebe/aboutus.jpg 2000w,
					https://res.cloudinary.com/dariku/image/upload/c_fill,q_auto,w_1000/v1548513244/ibebe/aboutus.jpg 1000w,
					https://res.cloudinary.com/dariku/image/upload/c_fill,q_auto:eco,w_500/v1548513244/ibebe/aboutus.jpg 700w`}
					sizes="100vw"
					alt="about us image background"
					className={classes.image}
					style={this.handleParralax()}
				/>

				<Typography variant="h2" component="h2" className={classes.title}>
					За нас
				</Typography>

				<div className={classes.content_wrapper}>
					<Typography variant="h3" component="h3" className={classes.content}>
						Мобайл Шоп Къмпани ЕOOД е вносител на внимателно подбрани, висококачествени бебешки стоки и
						аксесоари на от 2009г. Ние сме изключителен дистрибутор за България на бебешките аксесоари и
						умно измислени пособия за отглеждане на бебе на американската фирма Prince Lionheart, която има
						дългогодишен опит в разработването на бебешки и детски продукти. Предлагаме богат асортимент на
						слингове и ергономични раници за носене на бебе на марката Minimonkey, които са практични,
						удобни и лесни за използване. Нашия асортимент включва и висококачествените видео бебефони на
						холандската марка Luvion с големи цветни дисплеи, несравнимо качество на изображението, голям
						обхват и сигурна връзка. Топлите чувалчета и аксесоари на испанските марки Walking Mum и Tris &
						Ton се отличават с оригинален дизайн, изключително качество на вложените материали и безупречна
						изработка. Ново предложение са уникалните цветни бебешки шишета на шведската марка TWISTSHAKE.
						Всички предлагани от нас марки са с безкомпромисно качество, стил, функционалност и безопасност.
					</Typography>
				</div>
				<style jsx>
					{`
						.footer {
							position: relative;
						}
					`}
				</style>
			</div>
		)
	}
}

const styles = (theme) => ({
	root            : {},
	title           : {
		color                        : '#AF4489',
		fontSize                     : '2rem',
		fontWeight                   : 'bold',
		textTransform                : 'uppercase',
		textAlign                    : 'center',
		marginTop                    : '1em',
		[theme.breakpoints.up('sm')]: {
			margin    : 0,
			textAlign : 'left',
			position  : 'relative',
			top       : '2em',
			left      : '5%',
			fontSize  : '5rem'
		}
	},
	image           : {
		width                        : '100%',
		[theme.breakpoints.up('sm')]: {
			position : 'fixed',
			zIndex   : '-10'
		}
	},
	content_wrapper : {
		marginTop                    : 0,
		background                   : '#53A7BC',
		[theme.breakpoints.up('sm')]: {
			marginTop : '50vh'
		},
		[theme.breakpoints.up('md')]: {
			marginTop : '55vh'
		},
		[theme.breakpoints.up('lg')]: {
			marginTop : '63vh'
		}
	},
	content         : {
		padding                      : '1em 1em 2em',
		lineHeight                   : '1.3',
		width                        : '100%',
		color                        : '#ffffff',
		fontSize                     : '1.4rem',
		marginTop                    : '2em',
		[theme.breakpoints.up('md')]: {
			marginTop : 0,
			padding   : '1em 0 2em 15%',
			width     : '70%',
			fontSize  : '2.5rem'
		},
		[theme.breakpoints.up('lg')]: {
			width    : '60%',
			fontSize : '3rem'
		}
	}
})

export default withStyles(styles)(About)
