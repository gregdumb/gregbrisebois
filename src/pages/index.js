import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'
import Typer from '../components/Typer'

const IndexPage = () => (
	<div>
		<header css={{
			paddingTop: '5rem',
			paddingBottom: '5rem',
			background: 'cornflowerblue',
			color: 'white',
			height: '200px',
			}} >
			<Container>
				<h1 css={{textAlign: 'center', fontSize: '4rem'}} >
					<Typer options={{
						strings: [
							'I develop websites',
							'I develop backends',
							'I develop games',
							'I write tutorials',
						],
						typeSpeed: 70,
						backSpeed: 70,
						backDelay: 1000,
						loop: true,
					}} />
				</h1>
			</Container>
		</header>
		<div>
			<Container>
				<p>Welcome to my site.</p>
				<p>I have som projects and stuff here.</p>
				<Link to="/projects/">Go to projects</Link>
			</Container>
		</div>
  	</div>
)

export default IndexPage;