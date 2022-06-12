function searchKeyword(input, headlines) {

	return headlines.filter(headline => headline[0].includes(input) || headline[2].includes(input));
}

module.exports = searchKeyword;