module.exports = {
	siteMetadata: {
		title: 'Greg Brisebois',
	},
	plugins: [
		'gatsby-plugin-glamor',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
			  name: 'src',
			  path: `${__dirname}/src/`,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 590,
							linkImagesToOriginal: true,
						}
					}
				]
			}
		}
	],
};
