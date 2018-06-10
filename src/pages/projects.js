import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'
import PostLinkList from '../components/PostLinkList'
import { Typography } from '@material-ui/core';

//sort: {fields: [frontmatter___date], order: DESC}

export const query = graphql`
	query ProjectsQuery {
		allMarkdownRemark(
			filter: {fields: {folder: {eq: "projects"}}}
			sort: {fields: [frontmatter___date], order: DESC}
		) {
			edges {
			  	node {
					frontmatter {
				  		title
						date
						tags
						thumbnail
					}
					fields {
						slug
					}
					html
					excerpt
			  	}
			}
		}
	}
`;

const Projects = ({ data }) => (
	<Container paddingTop >
		<Typography variant="display4" gutterBottom >My Projects</Typography>
		<PostLinkList nodes={data.allMarkdownRemark.edges.map(({node}) => node)} />
	</Container>
)

export default Projects;