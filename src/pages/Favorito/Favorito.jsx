import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useFavoriteContext } from '../../context/Favorite';
import Titulo from '../../components/Titulo';
import Cards from '../../components/Cards';
import noMovie from '../../assets/noMovie.webp';

function Favorito() {
	const { favorito } = useFavoriteContext();

	return (
		<Container className="mt-5 mb-5" style={{ flex: 1 }}>
			<Titulo>
				<h1>Favoritos</h1>
			</Titulo>
			<Row className="gap-4 justify-content-center">
				{favorito.length === 0 ? (
					<img className="w-50 h-50 img-thumbnail" src={noMovie} alt="Sem Filmes :c" />
				) : (
					favorito.map((movie) => (
						<Col key={movie.id} xs={12} md={6} lg={3}>
							<Cards id={movie.id} name={movie.name} imagem={movie.imagem} />
						</Col>
					))
				)}
			</Row>
		</Container>
	);
}

export default Favorito;
