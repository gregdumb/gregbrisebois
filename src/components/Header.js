import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { colors, sizes, media } from '../theme'
import Container from './Container'
import Hamburger from './Hamburger'

const HeaderLink = ({ text, path, onClick }) => (
	<Link
		to={path}
		onClick={onClick}
		css={{
			height: '100%',
			color: 'white',
			textDecoration: 'none',
			fontSize: '20px',
			[media.lessThan('large')]: {
				fontSize: '16px',
			},
			':hover': {
				textDecoration: 'none',
			}
		}} >
		<div css={{
			display: 'flex',
			alignItems: 'center',
			height: '100%',
			padding: '0 0.5em',
			[media.lessThan('small')]: {
				// For mobile dropdown
				height: '3em',
				fontSize: '1em',
			},
			':hover': {
				backgroundColor: colors.veryDarkHover,
			}
		}} >
			{text}
		</div>
	</Link>
)

const DropDown = ({ children, visible }) => (
	<div css={{
		display: visible ? 'flex' : 'none',
		flexDirection: 'column',
		position: 'absolute',
		right: '0',
		top: sizes.header.small,
		background: colors.veryDark,
		width: 200,
		zIndex: 4,
	}} >
		{children}
	</div>
)

const Header = ({ headerTitle, toggleDropDown, closeDropDown, dropDownVisible }) => (
	<header css={{
		background: colors.veryDark,
		color: colors.veryDarkText,
		width: '100%',
		position: 'fixed',
		zIndex: 1,
		top: 0,
		left: 0,
	}} >
		<Container>
			<div css={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				height: sizes.header.large,
				[media.lessThan('large')]: {
					height: sizes.header.small
				}
			}} >
				<h1 css={{
					margin: 0,
					display: 'inline',
					fontSize: '30px',
					whiteSpace: 'nowrap',
					[media.lessThan('large')]: {
						fontSize: '25px',
					}
				}} >
					<Link
						to="/"
						css={{
							color: 'white',
							textDecoration: 'none',
							':hover': {
								textDecoration: 'none',
							}
						}} >
						{headerTitle}
					</Link>
				</h1>
				<div css={{
					display: 'flex',
					alignItems: 'center',
					overflowY: 'auto',
					height: '100%',
					paddingLeft: '2em',
					[media.lessThan('small')]: {
						/*paddingLeft: '0.5em',
						paddingRight: '0.5em',
						maskImage: 'linear-gradient(to right, transparent, black 20px, black 90%, transparent)',*/
						display: 'none',
					}
				}}>
					<HeaderLink text="Home" path="/" />
					<HeaderLink text="Projects" path="/projects/" />
					<HeaderLink text="Tutorials" path="/tutorials/" />
					<HeaderLink text="About" path="/about/" />
				</div>
				<a onClick={toggleDropDown} css={{
					display: 'none',
					color: colors.veryDarkText,
					marginLeft: 'auto',
					zIndex: 4,
					[media.lessThan('small')]: {
						display: 'block',
					}
				}} >
					<Hamburger isActive={dropDownVisible} />
				</a>
			</div>
			<DropDown visible={dropDownVisible}>
				<HeaderLink text="Home" path="/" onClick={toggleDropDown} />
				<HeaderLink text="Projects" path="/projects/" onClick={toggleDropDown} />
				<HeaderLink text="Tutorials" path="/tutorials/" onClick={toggleDropDown} />
				<HeaderLink text="About" path="/about/" onClick={toggleDropDown} />
			</DropDown>
			<div onClick={closeDropDown} css={{
				display: dropDownVisible ? 'block' : 'none',
				background: 'black',
				opacity: 0.5,
				zIndex: 3,
				position: 'fixed',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
			}} />
		</Container>
	</header>
)

Header.propTypes = {
	headerTitle: PropTypes.string
}

export default Header
