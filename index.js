const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
require('dotenv').config();

app.use(express.static('./public'));

app.get('/', (req, res) => {
	res.send('FT tech test')
});

app.listen(port, () => {
	console.log(`App is listening on port ${port}!`)
});

axios.post(`https://api.ft.com/content/search/v1?apiKey=${process.env.ApiKey}`,
{
	"queryString": "banks",
},
 {
	'Content-Type': 'application/json'
},
).then(function (response) {
	console.log(response);
})
