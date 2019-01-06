import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import UnstyledLink from './UnstyledLink'

const styles = {
	card: {
		//padding: 16,
	},
	mediaPlaceholder: {
		backgroundPosition: 'top',
		backgroundSize: 'cover',
	},
	media: {
		height: 140,
		backgroundPosition: 'top',
	}
}

const PostLink = ({ classes, node }) => (
	<UnstyledLink to={node.fields.slug} >
		<Card className={classes.card} >
			{node.frontmatter.image &&
				<div
					className={classes.mediaPlaceholder}
					style={{ backgroundImage: `url(${node.frontmatter.image.childImageSharp.fluid.base64})` }} >
					<CardMedia
						className={classes.media}
						image={node.frontmatter.image.childImageSharp.fluid.src} />
				</div>
			}
			<CardContent >
				<Typography variant="title" gutterBottom >{node.frontmatter.title}</Typography>
				<Typography variant="body1">{node.excerpt}</Typography>
			</CardContent>
		</Card>
	</UnstyledLink>
)

export default withStyles(styles)(PostLink);