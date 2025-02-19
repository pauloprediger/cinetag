import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Titulo from '../../components/Titulo';
import Container from '../../components/Container';
import NotFound from '../../routes/NotFound/NotFound';

function Player() {
	const [video, setVideo] = useState(null); // inicializar com null
	const parametros = useParams();

	useEffect(() => {
		// Fazendo a requisição à API
		fetch('https://my-json-server.typicode.com/pauloprediger/cinetag-api/db')
			.then((response) => response.json())
			.then((data) => {
				// Procurando o filme específico dentro do array 'movies'
				const foundMovie = data.movies.find((movie) => movie.id === Number(parametros.id));

				// Se o filme for encontrado, atualizar o estado
				if (foundMovie) {
					setVideo(foundMovie);
				} else {
					setVideo(null); // Se não encontrar, retorna para o NotFound
				}
			})
			.catch((error) => {
				console.error('Erro ao buscar o filme:', error);
				setVideo(null); // Caso de erro na requisição, retorna para o NotFound
			});
	}, [parametros.id]);

	// Se não encontrar o filme ou erro na requisição, exibe a página de erro
	if (!video) {
		return <NotFound />;
	}

	return (
		<Container>
			<Titulo>
				<h1>{video.name}</h1>
			</Titulo>
			<iframe
				width="853"
				height="480"
				src={video.link}
				title={video.name}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			/>
		</Container>
	);
}

export default Player;
