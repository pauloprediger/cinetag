import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useFavoriteContext } from '../../context/Favorite';

import favorite from './favorite_outline.png';
import unFavorite from './favorite.png';

function Cards({ id, name = "Filme Desconhecido", imagem = "/default-image.jpg"}) {
	const { favorito, adicionaFavorito } = useFavoriteContext();

	const isFavorito = favorito.some((item) => item.id === id);

	const favoriteIcon = isFavorito ? unFavorite : favorite;

	return (
		<Card className="border-dark" style={{ width: '18rem' }}>
			<Link to={`/${id}`}>
				<Card.Img variant="top" src={imagem} style={{width : '100%', height: '320px'}} />
			</Link>
			<Card.Body style={{ backgroundColor: 'lightgrey' }}>
				<Card.Title>{name}</Card.Title>
				<Button variant="primary" onClick={() => adicionaFavorito({ id, name, imagem })}>
					<img src={favoriteIcon} alt="Favoritar Filme" />
				</Button>
			</Card.Body>
		</Card>
	);
}

export default Cards;

Cards.propTypes = {
	name: PropTypes.string.isRequired,
	imagem: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};
