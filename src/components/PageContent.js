import React from 'react'
import Container from '../components/Container'

const PageContent = ({ children }) => (
	<div css={{
		paddingTop: '1rem',
	}} >
		<Container>
			{children}
		</Container>
	</div>
)

export default PageContent;