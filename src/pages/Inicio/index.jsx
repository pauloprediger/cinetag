import { useState, React, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Cards from '../../components/Cards';
import Titulo from '../../components/Titulo';

function Inicio() {
	const [movies, setVideos] = useState([]);

	useEffect(() => {
		fetch('https://my-json-server.typicode.com/pauloprediger/cinetag-api/db')
			.then((response) => response.json())
			.then((data) => setVideos(data.movies)) // Acessar a chave correta
			.catch((error) => console.error('Erro ao buscar dados:', error));
	}, []);

	return (
		<Container className="mt-5" style={{ marginBottom: '50px' }}>
			<Titulo>
				<h1>Um lugar para guardar os seus vídeos e filmes!</h1>
			</Titulo>
			<Row className="gap-4 justify-content-center">
				{movies.map((movie) => (
					<Col key={movie.id} xs={12} md={6} lg={3}>
						<Cards id={movie.id} name={movie.name} imagem={movie.imagem} />
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default Inicio;
