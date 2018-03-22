import React from 'react'
import Container from '../components/Container'

const NotFoundPage = () => (
	<div css={{paddingTop: '2rem', textAlign: 'center'}} >
		<Container>
			<h1 css={{fontSize: '4rem'}} >404</h1>
			<h2>Not found</h2>
			<p>The requested page is not available on the server :(</p>
		</Container>
	</div>
)

export default NotFoundPage;