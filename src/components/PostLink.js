import React from 'react'
import Link from 'gatsby-link'
import { media } from '../theme'

const PostLink = ({ node }) => (
	<Link to={node.fields.slug} css={{
		color: 'black',
		textDecoration: 'none',
		
		':hover': {
			textDecoration: 'none',
			
		},
	}} >
		<div css={{
			display: 'flex',
			marginBottom: '1rem',
			border: '1px solid lightgrey',
			transition: 'all 0.1s ease-in-out', // Needs to be globalized, same thing is in BoxLink
			':hover': {transform: 'scale(1.05)'},
			[media.lessThan('small')]: {
				flexDirection: 'column',
			}
		}} >
			<div css={{
				boxSizing: 'border-box',
				padding: '1em',
				width: (node.frontmatter.thumbnail ? '60%' : '100%'),
				[media.lessThan('small')]: {
					width: '100%',
				}
			}} >
				<h2>{node.frontmatter.title}</h2>
				<span css={{
					textDecoration: 'none',
					':hover': {textDecoration: 'none'}
				}} >
					<p css={{color: 'lightgrey'}} >Tags: {(node.frontmatter.tags || []).map(tag => (
						<span>
							<span css={{
								':hover': {
									color: 'white',
									background: 'salmon',
									borderRadius: '0.3em',
									padding: '0.1em 0.25em',
								}
							}} >
								{tag}
							</span>
							{', '}
						</span>
					))}</p>
					<p>{node.excerpt}</p>
				</span>
			</div>
			<div css={{
				display: (node.frontmatter.thumbnail) ? 'block' : 'none',
				overflow: 'hidden',
				background: `url(${node.frontmatter.thumbnail}) center no-repeat`,
				width: '40%',
				[media.lessThan('small')]: {
					width: '100%',
					height: '10em',
				}
			}} >
				
			</div>
		</div>
	</Link>
)

export default PostLink;