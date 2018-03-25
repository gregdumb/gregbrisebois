import React from 'react'
import { css } from 'glamor'
import Container from '../components/Container'
//import './MarkdownBody.css'

css.global('img', {
	maxWidth: '100%',
})

const MarkdownBody = ({ markdownRemark }) => (
	<div >
		<h1>{markdownRemark.frontmatter.title}</h1>
		<div dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
	</div>
)

export default MarkdownBody;