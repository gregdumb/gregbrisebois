import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link"

import TitledPage from '../components/TitledPage'
import PostLinkList from '../components/PostLinkList'
import withRoot from "../withRoot";
import Layout from "../components/Layout";

const Tags = ({ pathContext, data }) => {
	const { tag } = pathContext;
	const { edges, totalCount } = data.allMarkdownRemark;
	const tagHeader = `${totalCount} post${
		totalCount === 1 ? "" : "s"
	} tagged with "${tag}"`;
	
	return (
		<Layout>
			<TitledPage title={tagHeader} >
				<PostLinkList nodes={edges.map(({ node }) => node)} />
			</TitledPage>
		</Layout>
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

export default withRoot(Tags);

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