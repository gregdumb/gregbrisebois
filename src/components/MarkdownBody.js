import React from 'react'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Tags from '../components/Tags'
import { media } from '../theme'
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
			...theme.typography.display3,
		},
		'& h2': {
			...theme.typography.display2,
		},
		'& h3': {
			...theme.typography.display1,
		},
		'& h4': {
			...theme.typography.headline,
		},
		'& h5': {
			...theme.typography.title,
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
		
		<Typography variant="subheading" gutterBottom color="textSecondary" >{markdownRemark.frontmatter.date}</Typography>
		
		<Typography variant="display4" gutterBottom >{markdownRemark.frontmatter.title}</Typography>
		
		<Tags tags={markdownRemark.frontmatter.tags} />
		
		<div className={classes.md} dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
		
	</div>
)

export default withStyles(styles)(MarkdownBody);