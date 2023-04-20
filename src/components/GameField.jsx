import { useState, useContext, useEffect } from 'react'
import { alphabet, randomFirst, randomSecond } from '../utils/consts'
import CharItem from './UI/CharItem'
import { ActiveContext, SecondsContext } from '../index.js'
import Timer from './Timer.jsx'
import LeaderService from '../API/LeaderService.js'
import generateID from '../utils/generateId.js'

let ind = 0
const GameField = () => {
	const [random, setRandom] = useState(randomFirst)
	const [userId, setUserId] = useState('')
	const { isActive, setIsActive } = useContext(ActiveContext)
	const { seconds } = useContext(SecondsContext)

	useEffect(() => {
		const storedId = localStorage.getItem('playerId')

		if (storedId) {
			setUserId(storedId)
		} else {
			async function fetchData() {
				const id = await generateID()
				setUserId(id)
				localStorage.setItem('playerId', id)
			}
			fetchData()
		}

		return () => setIsActive(false)
	}, [])

	async function sendResult(seconds) {
		let data = {
			timeSpend: seconds,
		}
	}

	async function sendRating(id, second) {
		let data = {
			playerId: id,
			score: second,
		}
		await LeaderService.sendData(data)
	}

	const clickHandler = index => {
		let currentChar = random[index]
		if (alphabet[ind] !== currentChar) {
			alert('Неправильный порядок')
			return
		}
		if (currentChar === 'А') {
			setIsActive(true)
		}
		if (currentChar === 'Я') {
			setIsActive(false)
			sendResult(seconds)
			sendRating(userId, seconds)
		}
		setRandom(prevState => {
			const newRandom = [...prevState]
			if (randomSecond.includes(currentChar)) {
				newRandom[index] = ''
				return newRandom
			}
			newRandom[index] = randomSecond[index]
			return newRandom
		})
		ind++
	}

	return (
		<div className='field'>
			<Timer />
			<div className='wrapper'>
				{random.map((letter, index) => (
					<CharItem
						key={index}
						letter={letter}
						index={index}
						clickHandler={clickHandler}
					/>
				))}
			</div>
		</div>
	)
}

export default GameField
