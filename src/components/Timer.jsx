import React, { useState, useEffect } from 'react'
import { ActiveContext, SecondsContext } from '../index.js'
import { useContext } from 'react'

const Timer = () => {
	const { seconds, setSeconds } = useContext(SecondsContext)
	const { isActive, setIsActive } = useContext(ActiveContext)

	useEffect(() => {
		let interval = null

		if (isActive) {
			interval = setInterval(() => {
				setSeconds(seconds => seconds + 1)
			}, 1000)
		} else if (!isActive && seconds !== 0) {
			setSeconds(0)
			clearInterval(interval)
		}

		return () => {
			clearInterval(interval)
		}
	}, [isActive, seconds])

	return (
		<div className='timer'>
			<div className='time'>Таймер: {seconds}</div>
		</div>
	)
}

export default Timer
