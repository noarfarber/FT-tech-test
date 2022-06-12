const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const filterByKeyword = require('../filterByKeyword');
const getData = require('../getData');

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '../public')));


app.get('/', async (req, res) => {
	const headlines = await getData

	res.render('index', {
		title: 'FINANCIAL TIMES',
		articles: headlines
	});

});

app.get('/search/:keyword', async (req, res) => {
	let headlines = await getData

	const keyword = req.params.keyword
	
	let filteredHeadlines = filterByKeyword(keyword, headlines)

	if (filteredHeadlines.length !== headlines.length) {
		headlines = filteredHeadlines;
	}
	res.render('index', {
		title: 'FINANCIAL TIMES',
		articles: headlines
	});
});


app.listen(port, () => {
	console.log(`App is listening on port ${port}!`)
});
