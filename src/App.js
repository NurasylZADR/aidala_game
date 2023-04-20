import './App.css'
import { Link } from 'react-router-dom'
import AppRouter from './components/AppRouter.jsx'
import { ActiveContext, SecondsContext } from './index'
import { useState } from 'react'
function App() {
	const [isActive, setIsActive] = useState(false)
	const [seconds, setSeconds] = useState(0)

	return (
		<>
			<ActiveContext.Provider value={{ isActive, setIsActive }}>
				<SecondsContext.Provider value={{ seconds, setSeconds }}>
					<div className='app'>
						<h1>От А до Я</h1>

						<p>
							Нажимайте настолько быстро насколько вы сможете! Таймер будет{' '}
							<br />
							запущен автоматически.
						</p>
						<Link to='/game'>Играть</Link>
						<Link to='/history'>История результатов</Link>
						<Link to='/leaders'>Рейтинг игроков</Link>
						<AppRouter />
					</div>
				</SecondsContext.Provider>
			</ActiveContext.Provider>
		</>
	)
}

export default App
