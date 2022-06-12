function filterByKeyword(keyword, headlines) {
	return headlines.filter(headline => headline[0].includes(keyword) || headline[2].includes(keyword));
}

module.exports = filterByKeyword;