import React from 'react'
import { css } from 'glamor'
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
			...theme.typography.display2,
		},
		'& h2': {
			...theme.typography.display1,
		},
		'& h3': {
			...theme.typography.headline,
		},
		'& h4': {
			...theme.typography.title,
		},
		'& h5': {
			...theme.typography.subheading,
		},
		
		'& p': {
			...theme.typography.body1,
		},
		
		'& img': {
			maxWidth: '100%',
		}
	}
})

const MarkdownBody = ({ classes, markdownRemark }) => (
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
		<Typography variant="display3" gutterBottom >{markdownRemark.frontmatter.title}</Typography>
		
		<div className={classes.md} dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
		
	</div>
)

export default withStyles(styles)(MarkdownBody);