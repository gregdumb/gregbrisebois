import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'
import PostLinkList from '../components/PostLinkList'

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
	<Container>
		<h1>My Projects</h1>
		<PostLinkList nodes={data.allMarkdownRemark.edges.map(({node}) => node)} />
	</Container>
)

export default Projects;