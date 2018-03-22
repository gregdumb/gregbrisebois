import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { colors } from '../theme'

const HeaderLink = ({ text, path }) => (
	<li style={{display: 'inline-block', marginLeft: '1em' }}>
		<Link to={path} className="navlink" >{text}</Link>
	</li>
)

const Header = ({ headerTitle, onOpenSidebar }) => (
	<header style={{
		backgroundColor: colors.primary,
		color: colors.white,
		width: '100%',
		position: 'fixed',
		zIndex: 1,
		top: 0,
		left: 0,
	}} >
		<div style={{
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			height: '4rem',
		}} >
			<a onClick={onOpenSidebar}>Click</a>
			<h1 style={{ margin: 0, display: 'inline' }}>
				<Link
					to="/"
					className="navlink" >
					{headerTitle}
				</Link>
			</h1>
			<ul style={{display: 'inline-block', float: 'right', color: 'white'}}>
				<HeaderLink text="Home" path="/" />
				<HeaderLink text="Projects" path="/projects/" />
				<HeaderLink text="404" path="/404/" />
			</ul>
		</div>
	</header>
)

Header.propTypes = {
	headerTitle: PropTypes.string
}

export default Header
