const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = 3000;
require('dotenv').config();

app.get('/', (req, res) => {
	res.send('FT tech test')
});

const url = `https://api.ft.com/content/search/v1?apiKey=${process.env.ApiKey}`;

app.get('/headlines', (req, res) => {
	axios.post(url,
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
			
			res.send(headlines);
		})
		.catch((error) => console.log(error));
});


app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
	console.log(`App is listening on port ${port}!`)
});
	