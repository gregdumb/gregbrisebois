import React from "react";
import PropTypes from "prop-types";

// Components
import Link from "gatsby-link"
import PageContent from '../components/PageContent'
import PostLink from '../components/PostLink'

const Tags = ({ pathContext, data }) => {
	const { tag } = pathContext;
	const { edges, totalCount } = data.allMarkdownRemark;
	const tagHeader = `${totalCount} post${
		totalCount === 1 ? "" : "s"
	} tagged with "${tag}"`;
	
	return (
		<PageContent>
		<h1>{tagHeader}</h1>
		{edges.map(({ node }) => (
			<PostLink node={node} />
		))}
		</PageContent>
	);
};

Tags.propTypes = {
	pathContext: PropTypes.shape({
		tag: PropTypes.string.isRequired,
	}),
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			totalCount: PropTypes.number.isRequired,
			edges: PropTypes.arrayOf(
				PropTypes.shape({
					node: PropTypes.shape({
						frontmatter: PropTypes.shape({
							path: PropTypes.string.isRequired,
							title: PropTypes.string.isRequired,
						}),
					}),
				}).isRequired
			),
		}),
	}),
};

export default Tags;

export const pageQuery = graphql`
query TagPage($tag: String) {
	allMarkdownRemark(
		limit: 2000
		sort: { fields: [frontmatter___date], order: DESC }
		filter: { frontmatter: { tags: { in: [$tag] } } }
	) {
		totalCount
		edges {
			node {
				frontmatter {
					date
					title
					tags
					thumbnail
				}
				fields {
					slug
				}
				excerpt
			}
		}
	}
}
`;