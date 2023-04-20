const LeaderItem = ({ player, index }) => {
	return (
		<tr>
			<td>{index + 1}</td>
			<td>{player.playerId}</td>
			<td>{player.score} секунд</td>
		</tr>
	)
}

export default LeaderItem
