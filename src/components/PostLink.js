import React from 'react'
import Link from 'gatsby-link'
import { styles, media } from '../theme'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import UnstyledLink from './UnstyledLink'

const old = ({ node }) => (
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
			...styles.animated,
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
				<h2 css={{marginTop: 0}} >{node.frontmatter.title}</h2>
				<span css={{
					textDecoration: 'none',
					':hover': {textDecoration: 'none'}
				}} >
					<p>{node.frontmatter.date}</p>
					<p>
						{node.excerpt}
					</p>
				</span>
			</div>
			<div css={{
				display: (node.frontmatter.thumbnail) ? 'block' : 'none',
				overflow: 'hidden',
				background: `url(${node.frontmatter.thumbnail}) center no-repeat`,
				backgroundSize: 'cover',
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

const s = {
	card: {
		//padding: 16,
	}
}

const PostLink = ({ classes, node }) => (
	<UnstyledLink to={node.fields.slug} >
		<Card className={classes.card} >
			<CardMedia image={node.frontmatter.thumbnail} />
			<CardContent >
				<Typography variant="title" gutterBottom >{node.frontmatter.title}</Typography>
				<Typography variant="subheading">{node.excerpt}</Typography>
			</CardContent>
		</Card>
	</UnstyledLink>
)

export default withStyles(s)(PostLink);