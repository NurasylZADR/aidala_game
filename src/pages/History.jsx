import axios from 'axios'
import { useEffect, useState } from 'react'
import HistoryService from '../API/HistoryService.js'
import './Table.css'

const History = () => {
	const [results, setResults] = useState([])

	async function fetchDataById(id) {
		const response = await HistoryService.getDataById(id)
		setResults(response)
	}

	useEffect(() => {
		const storedId = localStorage.getItem('playerId')
		fetchDataById(storedId)
	}, [])

	return (
		<div className='container'>
			<h2>История игр</h2>

			<table id='table'>
				<tr>
					<th>Score</th>
				</tr>
				{results.map((result, index) => (
					<tr key={index}>
						<td>{result.score} секунд</td>
					</tr>
				))}
			</table>
		</div>
	)
}

export default History
