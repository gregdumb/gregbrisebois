module.exports = {
	siteMetadata: {
		title: 'Greg Brisebois',
	},
	plugins: [
		'gatsby-plugin-glamor',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
			  name: 'src',
			  path: `${__dirname}/src/`,
			},
		},
		'gatsby-transformer-remark',
	],
};
