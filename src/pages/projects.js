import React from 'react'
import Link from 'gatsby-link'
import PageContent from '../components/PageContent'
import PostLink from '../components/PostLink'

export const query = graphql`
	query ProjectsQuery {
		allMarkdownRemark(filter: {fields: {folder: {eq: "projects"}}}) {
			edges {
			  	node {
					frontmatter {
				  		title
						date
						tags
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
	<PageContent>
		<h1>My Projects</h1>
		{data.allMarkdownRemark.edges.map(({node}) => (
			<PostLink node={node} />
		))}
	</PageContent>
)

export default Projects;