import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Banner.module.css';

import BannerHome from '../../assets/banner-home.png';
import BannerFavorito from '../../assets/banner-favoritos.png';
import BannerPlayer from '../../assets/banner-player.png';

function BannerComponent() {
	const location = useLocation();
	const page = location.pathname.replace('/', '').toLowerCase(); // Converte para minúsculas

	const banners = {
		'': BannerHome, // Página inicial sem path
		favorito: BannerFavorito,
		player: BannerPlayer,
	};

	// Se a rota não estiver no objeto banners, oculta o <img>
	if (!(page in banners)) {
		return null;
	}

	return <img src={banners[page]} alt="Banner da página" className={styles.banner_img} />;
}

export default BannerComponent;
