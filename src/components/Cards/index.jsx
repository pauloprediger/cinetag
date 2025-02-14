import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

import favorite from '../../assets/favorite_outline.png';

function Cards({movieName, imagem}) {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src= {imagem} />
			<Card.Body>
				<Card.Title>{movieName}</Card.Title>
				<Button variant="primary"><img src= {favorite} alt="Favoritar Filme" /></Button>
			</Card.Body>
		</Card>
	);
}

export default Cards;

Cards.defaultProps = {
    movieName: 'Nome do filme',
}
Cards.propTypes = { 
	movieName: PropTypes.string,
    imagem: PropTypes.string.isRequired,
}

