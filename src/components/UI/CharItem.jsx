import './CharItem.css'

const CharItem = ({ letter, index, clickHandler }) => {
	return (
		<div
			className='item'
			style={{
				visibility: !letter && 'hidden',
				backgroundColor: '#1e90ff',
			}}
			key={index}
			onClick={() => clickHandler(index)}
		>
			{letter}
		</div>
	)
}

export default CharItem
