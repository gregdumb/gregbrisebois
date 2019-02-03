import React from 'react'
import Helmet from 'react-helmet'
import Tags from '../components/Tags'
import styled from 'styled-components'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const Markdown = styled.section`
	line-height: 1.75em;

	img {
		max-width: 100%;
	}
`;

const styles = theme => ({
	md: {
		'& h1': {
			...theme.typography.h1,
		},
		'& h2': {
			...theme.typography.h2,
		},
		'& h3': {
			...theme.typography.h3,
		},
		'& h4': {
			...theme.typography.h4,
		},
		'& h5': {
			...theme.typography.h5,
		},
		'& h6': {
			...theme.typography.h6,
		},
		
		'& p': {
			...theme.typography.body1,
		},
		
		'& li': {
			...theme.typography.body1,
		},
		
		/*'& a': {
			color: theme.palette.secondary.dark,
			textDecoration: 'none',
			'&:hover': {
				textDecoration: 'underline',
			}
		},*/
		
		'& img': {
			maxWidth: '100%',
		},

		'& blockquote': {
			fontStyle: 'italic',
			borderLeft: `4px solid ${theme.palette.secondary.dark}`,
			paddingLeft: 36,
			marginLeft: 0,
			color: 'grey',

		}
	},
	metadata: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: 16
	}
})

const MarkdownBody = ({ classes, markdownRemark }) => (
	<div >
		<Helmet title={`${markdownRemark.frontmatter.title} - Greg Brisebois`} />
		
		<Typography variant="subtitle1" gutterBottom color="textSecondary" >{markdownRemark.frontmatter.date}</Typography>
		
		<Typography variant="h1" gutterBottom >{markdownRemark.frontmatter.title}</Typography>
		
		<Tags tags={markdownRemark.frontmatter.tags} />
		
		<div className={classes.md} dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
		
	</div>
)

export default withStyles(styles)(MarkdownBody);