import React from 'react'
import Link from 'gatsby-link'

export const query = graphql`
	query ProjectsQuery {
		allMarkdownRemark {
			edges {
			  	node {
					frontmatter {
				  		title
				  		date
					}
					fields {
						slug
					}
					html
			  	}
			}
		}
	}
`;

const Projects = ({ data }) => (
	<div>
		<h1>My Projects</h1>
		{data.allMarkdownRemark.edges.map(({node}) => (
			<Link to={node.fields.slug} >
				<p>{node.frontmatter.title}{" - "}{node.frontmatter.date}</p>
			</Link>
		))}
	</div>
)

export default Projects;