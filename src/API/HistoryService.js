import { resultsURL } from '../utils/consts'
import axios from 'axios'

export default class HistoryService {
	static async sendData(payload) {
		const response = await axios
			.post(resultsURL, payload)
			.catch(error => console.error(error))
	}

	static async getDataById(id) {
		const response = await axios
			.get(resultsURL + `?playerId=${encodeURIComponent(id)}`)
			.catch(error => console.error(error))

		const sortedResults = response.data.sort((a, b) => b.id - a.id)
		return sortedResults
	}
}
