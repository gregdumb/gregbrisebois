module.exports = {
	siteMetadata: {
		title: 'Greg Brisebois',
	},
	plugins: [
		//'gatsby-plugin-glamor',
		'gatsby-plugin-react-helmet',
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
							maxWidth: 1000,
							linkImagesToOriginal: true,
							backgroundColor: 'transparent',
						}
					},
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							inlineCodeMarker: null,
							aliases: {},
						}
					},
					'gatsby-remark-responsive-iframe',
				]
			}
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-103014705-1',
				head: false,
				anonymize: true,
				respectDNT: true,
			}
		},
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: "./src/favicon.png",
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: false,
					yandex: false,
					windows: false
				}
			}
		},
		//{
		//	resolve: 'gatsby-plugin-material-ui',
		//	options: {
		//		pathToTheme: 'src/theme',
		//	}
		//},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		//'gatsby-plugin-react-next',
	],
};
