import React from 'react'
import Link from 'gatsby-link'
import { colors, styles, media } from '../theme'

const BoxLink = ({ icon, text, to }) => (
	<Link to={to} css={{
		maxWidth: '300px',
		margin: '1rem',
		fontSize: '1.5rem',
		flexGrow: 1,
		textAlign: 'center',
		color: colors.secondaryHighlightText,
		backgroundColor: colors.secondaryHighlight,
		...styles.animated,
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