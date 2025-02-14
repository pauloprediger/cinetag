import React from 'react';
import PlayerImage from '../assets/player.png';

function Player() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10rem' }}>
			<h2 className='mt-5 mb-5'>Player</h2>
			<img src= {PlayerImage} alt="Imagem Teste de Player" />
		</div>
	);
}

export default Player;
