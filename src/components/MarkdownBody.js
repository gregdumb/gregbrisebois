import React from 'react'
import Container from '../components/Container'
import './MarkdownBody.css'

const MarkdownBody = ({ markdownRemark }) => (
	<div >
		<h1>{markdownRemark.frontmatter.title}</h1>
		<div dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
	</div>
)

export default MarkdownBody;