import { Routes, Route, Navigate } from 'react-router-dom'
import Leaderboard from '../pages/Leaderboard'
import History from '../pages/History'
import GameField from './GameField'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/game' element={<GameField />} />
			<Route path='/history' element={<History />} />
			<Route path='/leaders' element={<Leaderboard />} />
			<Route path='*' element={<Navigate to='/game' />} />
		</Routes>
	)
}

export default AppRouter
