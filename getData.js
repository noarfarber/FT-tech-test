const axios = require('axios');
require('dotenv').config();

const url = `https://api.ft.com/content/search/v1?apiKey=${process.env.ApiKey}`;

const getData = axios.post(url,
	{
		"queryString": "banks",
		"queryContext": {
			"curations": [ "ARTICLES" ]
		},
		"resultContext" : {
			"aspects": [ "title", "location", "summary" ]
		}
	},
	{
		'Content-Type': 'application/json'
	},
	).then((response) => {
		const headlines = (response.data.results[0].results.map(obj => obj));		
		const allheadlines = headlines.map(headline => [headline.title.title, headline.location.uri, headline.summary.excerpt]
	);
		return allheadlines;
	})
	.catch((error) => console.log(error));


module.exports = getData;