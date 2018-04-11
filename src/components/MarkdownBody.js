import React from 'react'
import { css } from 'glamor'
import Container from '../components/Container'
import Tags from '../components/Tags'
import { media } from '../theme'
import styled from 'styled-components'

css.global('img', {
	maxWidth: '100%',
})

const Markdown = styled.section`
	line-height: 1.75em;
`;

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
		<Markdown>
			<div dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
		</Markdown>
	</div>
)

export default MarkdownBody;