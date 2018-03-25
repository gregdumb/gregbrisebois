import React from 'react'
import Link from 'gatsby-link'
import { colors, media } from '../theme'

const BoxLink = ({ icon, text, to }) => (
	<Link to={to} css={{
		maxWidth: '200px',
		margin: '1rem',
		fontSize: '1.5rem',
		flexGrow: 1,
		textAlign: 'center',
		color: colors.secondaryHighlightText,
		backgroundColor: colors.secondaryHighlight,
		transition: 'all 0.1s ease-in-out',
		':hover': {
			textDecoration: 'none',
			transform: 'scale(1.1)',
		},
		[media.lessThan('small')]: {
			maxWidth: '100%',
		}
	}} >
		<p><i css={{fontSize: '3rem'}} className={"fa fa-" + (icon || "exclamation-triangle")} /></p>
		<p >{text}</p>
	</Link>
)

export default BoxLink;