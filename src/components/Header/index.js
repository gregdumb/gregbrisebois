import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const HeaderLink = ({ text, path }) => (
	<li style={{display: 'inline-block', marginLeft: '1em' }}>
		<Link to={path} className="navlink" >{text}</Link>
	</li>
)

const Header = ({ headerTitle, onOpenSidebar }) => (
	<div className="navbar" >
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '1.45rem 1.0875rem',
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
	</div>
)

Header.propTypes = {
	headerTitle: PropTypes.string
}

export default Header
