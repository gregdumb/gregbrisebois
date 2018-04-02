const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const _ = require('lodash')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
	const { createNodeField } = boundActionCreators;
	if (node.internal.type === 'MarkdownRemark') {
		// Create slug
		const slug = createFilePath({ node, getNode, basePath: 'content' });
		createNodeField({
			node,
			name: 'slug',
			value: slug,
		});
		
		// Create category
		let folder = slug.match(/^\/[a-zA-Z]+/)[0];
		if(folder) folder = folder.replace('/', '');
		else folder = '';
		createNodeField({
			node,
			name: 'folder',
			value: folder
		});
	}
};

exports.createPages = ({ graphql, boundActionCreators }) => {

	const { createPage } = boundActionCreators;
	const tagTemplate = path.resolve("./src/templates/tags.js");

	return new Promise((resolve, reject) => {
		graphql(`
		{
		  	allMarkdownRemark {
				edges {
			  		node {
						frontmatter {
							tags
						}
						fields {
				  			slug
						}
			  		}
				}
		  	}
		}
	  	`)
	  	.then(result => {

			const posts = result.data.allMarkdownRemark.edges;

			posts.forEach(({ node }) => {
				createPage({
					path: node.fields.slug,
					component: path.resolve('./src/templates/project.js'),
					context: {
						// Data passed to context is available in page queries as GraphQL variables.
						slug: node.fields.slug,
					},
				})
			})

			// Tag pages:
			let tags = [];
			// Iterate through each post, putting all found tags into `tags`
			_.each(posts, edge => {
				if (_.get(edge, "node.frontmatter.tags")) {
					tags = tags.concat(edge.node.frontmatter.tags);
				}
			});
			// Eliminate duplicate tags
			tags = _.uniq(tags);

			// Make tag pages
			tags.forEach(tag => {
				createPage({
					path: `/tags/${_.kebabCase(tag)}/`,
					component: tagTemplate,
					context: {
						tag,
					},
				});
			});

			resolve();
		})
	})
};