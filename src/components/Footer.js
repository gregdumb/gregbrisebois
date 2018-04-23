import React from 'react'
import Container from './Container'
import { colors, media } from '../theme'

const FooterLink = ({ href, icon }) => (
	<a href={href} style={{color: 'white'}} >
		<i style={{fontSize: '1.5em', marginLeft: '0.5em'}} className={"fab fa-" + icon} />
	</a>
)

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
			<p>
				Copyright © Gregory Brisebois 2018, all rights reserved
				<span style={{float: 'right'}} >
					<FooterLink href="https://www.linkedin.com/in/gregbrisebois/" icon="linkedin" />
					<FooterLink href="https://github.com/gregdumb" icon="github" />
				</span>
			</p>
		</Container>
	</footer>
)

export default Footer;