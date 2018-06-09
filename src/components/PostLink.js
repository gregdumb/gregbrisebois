import React from 'react'
import Link from 'gatsby-link'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import UnstyledLink from './UnstyledLink'

const styles = {
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
				<Typography variant="body1">{node.excerpt}</Typography>
			</CardContent>
		</Card>
	</UnstyledLink>
)

export default withStyles(styles)(PostLink);