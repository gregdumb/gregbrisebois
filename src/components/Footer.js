import React from 'react'
import Container from './Container'
import { colors, media } from '../theme'

const Footer = ({ }) => (
	<footer css={{
		color: colors.veryDarkText,
		background: colors.veryDark,
		marginTop: '4em',
		paddingTop: '2em',
		paddingBottom: '2em',
		[media.lessThan('large')]: {
			paddingTop: '1em',
			paddingBottom: '1em',
		}
	}} >
		<Container>
			<p>Copyright © Gregory Brisebois 2018, all rights reserved</p>
		</Container>
	</footer>
)

export default Footer;