import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NotFound from '../../routes/NotFound/NotFound';
import styles from './Banner.module.css';

import BannerHome from '../../assets/banner-home.png';
import BannerFavorito from '../../assets/banner-favoritos.png';
import BannerPlayer from '../../assets/banner-player.png';

function BannerComponent() {
	const location = useLocation();
	const page = location.pathname.replace('/', '').toLowerCase();

	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await fetch('https://my-json-server.typicode.com/pauloprediger/cinetag-api/movies');
				if (!response.ok) {
					throw new Error('Erro ao buscar os dados da API');
				}
				const data = await response.json();
				setMovies(data);
			} catch (err) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchMovies();
	}, []);

	if (loading) {
		return <p>Carregando...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	const banners = {
		'': BannerHome, // Página inicial sem path
		favorito: BannerFavorito,
	};

	// Verifica se a rota é um número e se o filme existe nos dados da API
	const isNumeric = /^\d+$/.test(page);
	const movieExists = isNumeric && movies.some((movie) => movie.id === Number(page));

	// Define qual banner mostrar
	const bannerSrc = movieExists ? BannerPlayer : banners[page];

	// Se não houver um banner correspondente, renderiza o componente NotFound
	if (!bannerSrc) return null;

	return <img src={bannerSrc} alt="Banner da página" className={styles.banner_img} />;
}

export default BannerComponent;

