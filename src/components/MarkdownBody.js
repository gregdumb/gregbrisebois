import React from 'react'
import { css } from 'glamor'
import Container from '../components/Container'
import Tags from '../components/Tags'
import { media } from '../theme'

css.global('img', {
	maxWidth: '100%',
})

const MarkdownBody = ({ markdownRemark }) => (
	<div >
		
		<div css={{
			display: 'flex',
			justifyContent: 'space-between',
			[media.lessThan('small')]: {
				flexDirection: 'column',
			}
		}} >
			{markdownRemark.frontmatter.date}
			<Tags tags={markdownRemark.frontmatter.tags} />
		</div>
		<h1>{markdownRemark.frontmatter.title}</h1>
		<div dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
	</div>
)

export default MarkdownBody;