const express = require('express')
const path = require('path')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/', (req, res) => {
	res.send('FT tech test')
});

app.listen(port, () => {
	console.log(`App is listening on port ${port}!`)
});