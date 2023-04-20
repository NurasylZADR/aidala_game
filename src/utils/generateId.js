import LeaderService from '../API/LeaderService'

export default async function generateID() {
	let ind = 1
	let user = `Player #${ind}`
	const res = await LeaderService.getData()

	let usedIds = res.map(obj => obj.playerId)

	while (usedIds.includes(user)) {
		user = `Player #${++ind}`
	}

	return user
}
