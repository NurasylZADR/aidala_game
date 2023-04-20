import axios from 'axios'
import { useState, useEffect } from 'react'
import { resultsURL } from '../utils/consts.js'
import LeaderService from '../API/LeaderService.js'
import LeaderItem from '../components/UI/LeaderItem'
import './Table.css'

const Leaderboard = () => {
	const [leaderboardData, setLeaderboardData] = useState([])

	async function fetchLeaders() {
		const data = await LeaderService.getData()
		setLeaderboardData(data)
	}

	useEffect(() => {
		fetchLeaders()
	}, [])

	return (
		<div className='container'>
			<h2>Leaderboard</h2>
			<table id='table'>
				<thead>
					<tr>
						<th>Rank</th>
						<th>PlayerID</th>
						<th>Score</th>
					</tr>
				</thead>
				<tbody>
					{leaderboardData.map((player, index) => (
						<LeaderItem key={index} player={player} index={index} />
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Leaderboard
