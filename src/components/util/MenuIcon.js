import React, { Component } from 'react'

class MenuIcon extends Component {
	render () {
		const { size, color, menuOpened } = this.props
		return (
			<div className={`menu_icon ${menuOpened && 'menu_icon_close'}`}>
				<div className={`bar1 ${menuOpened && 'bar1_close'}`} />
				<div className={`bar2 ${menuOpened && 'bar2_close'}`} />
				<div className={`bar3 ${menuOpened && 'bar3_close'}`} />

				<style global jsx>
					{`
						.menu_icon {
							transition: all 0.44s;
							position: relative;
							width: ${size};
							height: ${size};
							border: 2px solid transparent;
							background: transparent;
							border-radius: 100%;
							cursor: pointer;
						}
						@media only screen and (min-width: 960px) {
							.menu_icon {
								display: none;
							}
						}
						.menu_icon_close {
							transform: scale(1) rotate(180deg);
							border-color: #ffffff;
							background: #ffffff;
						}
						.bar1 {
							height: 4px;
							position: absolute;
							background: ${color};
							right: 0;
							margin: auto;
							left: 0;
							border-radius: 1px;
							transition: all 0.44s cubic-bezier(0.5, 0.1, 0.1, 1.8);
							width: 19px;
							top: calc(50% - ((8px)) + -2px);
						}
						.bar1_close {
							transform: rotate(45deg);
							width: 19px !important;
							top: calc(50% - (2px)) !important;
						}
						.bar2 {
							height: 4px;
							position: absolute;
							background: ${color};
							right: 0;
							margin: auto;
							left: 0;
							border-radius: 1px;
							transition: all 0.44s cubic-bezier(0.5, 0.1, 0.1, 1.8);
							width: 19px;
							top: calc(50% - ((8px)) + 4px);
						}
						.bar2_close {
							left: -9px !important;
							opacity: 0;
						}
						.bar3 {
							height: 4px;
							position: absolute;
							background: ${color};
							right: 0;
							margin: auto;
							left: 0;
							border-radius: 1px;
							transition: all 0.44s cubic-bezier(0.5, 0.1, 0.1, 1.8);
							width: 19px;
							top: calc(50% - ((8px)) + 10px);
						}
						.bar3_close {
							transform: rotate(-45deg);
							width: 19px !important;
							top: calc(50% - (2px)) !important;
						}
					`}
				</style>
			</div>
		)
	}
}

export default MenuIcon
