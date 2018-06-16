import React from 'react'

import Typography from '@material-ui/core/Typography'

import PostLinkList from '../components/PostLinkList'
import TitledPage from '../components/TitledPage'

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
	<TitledPage title="Projects" >
		<PostLinkList nodes={data.allMarkdownRemark.edges.map(({node}) => node)} />
	</TitledPage>
)

export default Projects;