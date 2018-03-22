import React from 'react'
import Container from '../components/Container'

const MarkdownBody = ({ markdownRemark }) => (
	<Container>
		<div css={{ paddingTop: '1rem' }} >
			<h1>{markdownRemark.frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
		</div>
	</Container>
)

export default MarkdownBody;