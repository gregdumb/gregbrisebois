import React from 'react'
import Link from 'gatsby-link'
import MarkdownBody from '../components/MarkdownBody'
import PageContent from '../components/PageContent'

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
		<PageContent>
			<MarkdownBody markdownRemark={data.markdownRemark} />
		</PageContent>
	);
}

export default Project;