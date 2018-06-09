import React from 'react'
import { css } from 'glamor'
import Container from '../components/Container'
import Tags from '../components/Tags'
import { media } from '../theme'
import styled from 'styled-components'

import { withStyles } from '@material-ui/core/styles'

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
			...theme.typography.subheading,
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
		<h1 css={{fontSize: '2.25em'}} >{markdownRemark.frontmatter.title}</h1>
		
			<div className={classes.md} dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
		
	</div>
)

export default withStyles(styles)(MarkdownBody);