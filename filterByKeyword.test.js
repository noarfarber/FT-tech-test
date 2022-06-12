const searchKeyword = require('./filterByKeyword')

const fakeData = [
	[
    'The cost of complexity in supply chains',
    'https://www.ft.com/content/ff96f6f9-2c53-4e55-8a54-75a5c67e0d19',
    '...years on from the 2008 crises, how cutting layers of complexity out of lending systems has led to more stable banks and...'
  ],
  [
    'Has US inflation peaked?',
    'https://www.ft.com/content/fa54afe5-5959-4b57-a40d-bd2102a8c106',
    '...over.While Beijing on Wednesday instructed policy banks to extend an Rmb800bn ($120bn) credit line to fund infrastructure...'
  ]
]
test('should return one article given the input keyword inflation', () => {
	expect(searchKeyword('inflation', fakeData).length).toBe(1)
});

test('should return an article given the input keyword', () => {
	expect(searchKeyword('Wednesday', fakeData)[0][1]).toBe("https://www.ft.com/content/fa54afe5-5959-4b57-a40d-bd2102a8c106")
});

test('should return an article given the input keyword', () => {
	expect(searchKeyword('inflation', fakeData)[0][0]).toBe("Has US inflation peaked?")
});