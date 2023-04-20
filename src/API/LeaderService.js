import { resultsURL } from '../utils/consts'
import axios from 'axios'
import sortedAndFiltered from '../utils/sortArr'

export default class LeaderService {
	static async getData() {
		const response = await axios
			.get(resultsURL)
			.catch(error => console.error(error))

		const result = sortedAndFiltered(response.data)
		console.log(result)
		return result
	}
	static async sendData(payload) {
		const response = await axios
			.post(resultsURL, payload)
			.catch(error => console.error(error))
	}
}
