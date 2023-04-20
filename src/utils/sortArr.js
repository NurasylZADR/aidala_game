export default function sortedAndFiltered(arr) {
	const sortedPlayers = arr.sort((a, b) => a.score - b.score)
	const uniquePeople = sortedPlayers.reduce((acc, obj) => {
		const existingPerson = acc.find(
			p => p.playerId === obj.playerId && obj.score === obj.score
		)
		if (!existingPerson) {
			acc.push(obj)
		}
		return acc
	}, [])
	return uniquePeople
}
