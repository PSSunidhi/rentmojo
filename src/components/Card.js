import React from 'react';


const symbol = '&#9733;'
const card = ({title, platform, score, genre, editors_choice}) => (
	<div className="tc bg-light-green br3 ma2 pa3 dib grow shadow-s bw2">
		
		<h2>{title}</h2>
		<p>{platform}</p>
		<p>{score} &#9733;</p>
		<p>{genre}</p>
		<p>{editors_choice}</p>
	</div>
)

export default card;