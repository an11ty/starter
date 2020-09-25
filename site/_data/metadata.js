/*

Have a look here for examples of what things you can
add here to modify your site:

https://github.com/an11ty/template

*/

const domain = 'example.com'

module.exports = {
	title: 'An11ty Website',
	url: `https://${domain}/`,
	description: 'Built with an11ty.com',
	feed: {
		subtitle: 'An11ty Feed',
		filename: 'feed.xml',
		path: '/feed/feed.xml',
		id: `https://${domain}/`
	},
	json_feed: {
		path: '/feed/feed.json',
		url: `https://${domain}/feed/feed.json`
	}
}
