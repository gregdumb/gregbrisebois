import React from 'react'
import Link from 'gatsby-link'
import PageContent from '../components/PageContent'

export const query = graphql`
	query TutorialsQuery {
		allMarkdownRemark(filter: {fields: {folder: {eq: "tutorials"}}}) {
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

const Tutorials = ({ data }) => (
	<PageContent>
		<h1>Tutorials</h1>
		{data.allMarkdownRemark.edges.map(({node}) => (
			<Link to={node.fields.slug} >
				<p>{node.frontmatter.title}{" - "}{node.frontmatter.date}</p>
			</Link>
		))}
	</PageContent>
)

export default Tutorials;