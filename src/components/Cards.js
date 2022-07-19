import React from 'react';
import Card from './Card'

const cards = ({ games }) => {
	const cardsArray = games.map((user, i) => {
		return <Card 
			key={Math.random() * 9} 
			title={user.title} 
			score={user.score}
			genre={user.genre}
			editors_choice={user.editors_choice}
			platform={user.platform}
			/>
	})
	return (
		<div>
			{
				cardsArray
			}
		</div>
	)
}

export default cards