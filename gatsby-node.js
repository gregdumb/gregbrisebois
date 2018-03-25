const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

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
	const { createPage } = boundActionCreators
	return new Promise((resolve, reject) => {
		graphql(`
		{
		  	allMarkdownRemark {
				edges {
			  		node {
						fields {
				  			slug
						}
			  		}
				}
		  	}
		}
	  	`)
	  	.then(result => {
			result.data.allMarkdownRemark.edges.forEach(({ node }) => {
				createPage({
					path: node.fields.slug,
					component: path.resolve('./src/templates/project.js'),
					context: {
						// Data passed to context is available in page queries as GraphQL variables.
						slug: node.fields.slug,
					},
				})
			})
			resolve();
		})
	})
};