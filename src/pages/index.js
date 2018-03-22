import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'

const IndexPage = () => (
	<div>
		<header css={{
			paddingTop: '5rem',
			paddingBottom: '5rem',
			background: 'cornflowerblue',
			color: 'white'
			}} >
			<Container>
				<h1 css={{textAlign: 'center', fontSize: '4rem'}} >Welcome</h1>
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