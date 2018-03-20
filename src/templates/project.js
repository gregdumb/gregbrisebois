import React from 'react'
import Link from 'gatsby-link'

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
	
	console.log(data);
	console.log(query);
	
	return(
		<div>
			<h1>{data.markdownRemark.frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
		</div>
	);
}

export default Project;