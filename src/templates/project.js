import React from 'react'
import Link from 'gatsby-link'
import MarkdownBody from '../components/MarkdownBody'

export const query = graphql`
	query ProjectQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				date
			}
		}
	}
`;

const Project = ({data}) => {
	
	return(
		<MarkdownBody markdownRemark={data.markdownRemark} />
	);
}

export default Project;