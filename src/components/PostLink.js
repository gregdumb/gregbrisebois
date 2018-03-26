import React from 'react'
import Link from 'gatsby-link'

const PostLink = ({ node }) => (
	<Link to={node.fields.slug} css={{
		color: 'black',
		textDecoration: 'none',
		
		':hover': {
			textDecoration: 'none',
			
		},
	}} >
		<div css={{
			padding: '1rem',
			marginBottom: '1rem',
			border: '1px solid lightgrey',
			transition: 'all 0.1s ease-in-out', // Needs to be globalized, same thing is in BoxLink
			':hover': {transform: 'scale(1.05)'},
		}} >
			<h2>{node.frontmatter.title}</h2>
			<span css={{
				textDecoration: 'none',
				':hover': {textDecoration: 'none'}
			}} >
				<p css={{color: 'lightgrey'}} >Tags: {(node.frontmatter.tags || []).join(', ')}</p>
				<p>{node.excerpt}</p>
			</span>
		</div>
	</Link>
)

export default PostLink;