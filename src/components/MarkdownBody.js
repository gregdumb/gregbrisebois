import React from 'react'
import { css } from 'glamor'
import Container from '../components/Container'
import Tags from '../components/Tags'

css.global('img', {
	maxWidth: '100%',
})

const MarkdownBody = ({ markdownRemark }) => (
	<div >
		<h1>{markdownRemark.frontmatter.title}</h1>
		<p>
			{markdownRemark.frontmatter.date}
			<Tags tags={markdownRemark.frontmatter.tags} />
		</p>
		<div dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
	</div>
)

export default MarkdownBody;