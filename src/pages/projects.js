import React from 'react'

import Layout from '../components/Layout'
import PostLinkList from '../components/PostLinkList'
import TitledPage from '../components/TitledPage'
import withRoot from '../withRoot';

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
						image {
							childImageSharp {
								fluid(maxWidth:400) {
									src
									base64
								}
							}
						}
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
	<Layout>
		<TitledPage title="Projects" >
			<PostLinkList nodes={data.allMarkdownRemark.edges.map(({node}) => node)} />
		</TitledPage>
	</Layout>
)

export default withRoot(Projects);