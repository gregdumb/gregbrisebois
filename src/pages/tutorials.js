import React from 'react'

import TitledPage from '../components/TitledPage'
import PostLinkList from '../components/PostLinkList'
import Layout from '../components/Layout';
import withRoot from '../withRoot';

export const query = graphql`
	query TutorialsQuery {
		allMarkdownRemark(
			filter: {fields: {folder: {eq: "tutorials"}}}
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

const Tutorials = ({ data }) => (
	<Layout>
		<TitledPage title={"Tutorials"} >
			<PostLinkList nodes={data.allMarkdownRemark.edges.map(({node}) => node)} />
		</TitledPage>
	</Layout>
)

export default withRoot(Tutorials);