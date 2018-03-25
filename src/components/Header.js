import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { colors, sizes, media } from '../theme'
import Container from './Container';

const HeaderLink = ({ text, path }) => (
	<Link
		to={path}
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
			':hover': {
				backgroundColor: colors.veryDarkHover,
			}
		}} >
			{text}
		</div>
	</Link>
)

const Header = ({ headerTitle, onOpenSidebar }) => (
	<header css={{
		backgroundColor: colors.primary,
		color: colors.white,
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
						paddingLeft: '0.5em',
						paddingRight: '0.5em',
						maskImage: 'linear-gradient(to right, transparent, black 20px, black 90%, transparent)',
					}
				}}>
					<HeaderLink text="Home" path="/" />
					<HeaderLink text="Projects" path="/projects/" />
					<HeaderLink text="Tutorials" path="/tutorials/" />
				</div>
				<a
					href="https://github.com/gregdumb/gregbrisebois"
					target="_blank"
					css={{
						marginLeft: 'auto',
						color: 'white',
						[media.lessThan('medium')]: {
							display: 'none'
						}
					}} >
					<img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" css={{height: 30, color: 'white'}} />
				</a>
			</div>
		</Container>
	</header>
)

Header.propTypes = {
	headerTitle: PropTypes.string
}

export default Header
