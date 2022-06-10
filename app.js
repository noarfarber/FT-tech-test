const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const port = 3000;
require('dotenv').config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/', async (req, res) => {

	const headlines = await getData;

	res.render('index', {
		title: 'Headlines',
		articles: headlines
	});
});


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
		const headlines = (response.data.results[0].results.map(obj => obj.title.title));
		return headlines;
	})
	.catch((error) => console.log(error));	


app.listen(port, () => {
	console.log(`App is listening on port ${port}!`)
});
