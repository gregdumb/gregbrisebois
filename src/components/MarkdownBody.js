import React from 'react'
import { css } from 'glamor'
import Container from '../components/Container'
import Tags from '../components/Tags'
import { media } from '../theme'
import styled from 'styled-components'

const Markdown = styled.section`
	line-height: 1.75em;

	img {
		max-width: 100%;
	}
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
		<h1 css={{fontSize: '2.25em'}} >{markdownRemark.frontmatter.title}</h1>
		<Markdown>
			<div dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
		</Markdown>
	</div>
)

export default MarkdownBody;