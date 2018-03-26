import React from 'react'
import Link from 'gatsby-link'
import PageContent from '../components/PageContent'
import PostLink from '../components/PostLink'

export const query = graphql`
	query TutorialsQuery {
		allMarkdownRemark(filter: {fields: {folder: {eq: "tutorials"}}}) {
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

const Tutorials = ({ data }) => (
	<PageContent>
		<h1>Tutorials</h1>
		{data.allMarkdownRemark.edges.map(({node}) => (
			<PostLink node={node} />
		))}
	</PageContent>
)

export default Tutorials;