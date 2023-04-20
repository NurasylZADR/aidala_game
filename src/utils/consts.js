export const resultsURL = 'https://643a95cbbd3623f1b9b6b300.mockapi.io/ratings'

export const alphabet = [
	'А',
	'Б',
	'В',
	'Г',
	'Д',
	'Е',
	'Ё',
	'Ж',
	'З',
	'И',
	'Й',
	'К',
	'Л',
	'М',
	'Н',
	'О',
	'П',
	'Р',
	'С',
	'Т',
	'У',
	'Ф',
	'Х',
	'Ц',
	'Ч',
	'Ш',
	'Щ',
	'Ы',
	'Ь',
	'Э',
	'Ю',
	'Я',
]

function randomSelection(array) {
	let arr = array.sort(() => 0.5 - Math.random())
	return arr
}
export const firstHalf = alphabet.slice(0, 16)
export const secondHalf = alphabet.slice(16, 32)
export const randomFirst = randomSelection(firstHalf)
export const randomSecond = randomSelection(secondHalf)
