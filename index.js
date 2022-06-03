const express = require('express')
const path = require('path')

const app = express();
const port = 3000;

app.use(express.static('./public'));

app.get('/', (req, res) => {
	res.send('FT tech test')
});

app.listen(port, () => {
	console.log(`App is listening on port ${port}!`)
});