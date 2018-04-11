import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'
import Typer from '../components/Typer'
import BoxLink from '../components/BoxLink'
import { colors, media } from '../theme'

const IndexPage = () => (
	<div>
		<header css={{
			background: 'cornflowerblue',
			color: 'white',
			height: '300px',
			boxSizing: 'border-box',
			}} >
			<Container>
				<h1 css={{textAlign: 'left', fontSize: '4rem'}} >
					{"> "}
					<Typer options={{
						strings: [
							'I write websites',
							'I write backends',
							'I write games',
							'I write tutorials',
							'I write code',
						],
						typeSpeed: 70,
						backSpeed: 70,
						backDelay: 1000,
						loop: false,
					}} />
				</h1>
			</Container>
		</header>
		<div>
			<Container >
				<h3>I'm a computer scientist based in San Jose, CA.</h3>
				<p>This site serves as my public profile and hosting space for my projects.</p>
				<div css={{
					display: 'flex',
					justifyContent: 'center',
					[media.lessThan('small')]: {
						flexDirection: 'column',
					}
				}} >
					<BoxLink text="Tutorials" icon="graduation-cap" to="/tutorials/" />
					<BoxLink text="Projects" icon="wrench" to="/projects/" />
					<BoxLink text="About" icon="question" to="/about/" />
				</div>
			</Container>
		</div>
  	</div>
)

export default IndexPage;