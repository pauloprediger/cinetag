import React from 'react';
import { Outlet } from 'react-router-dom';
import FavoriteProvider from '../context/Favorite';
import NavBar from '../components/NavBar';
import Rodape from '../components/Rodape';
import BannerComponent from '../components/Banner';
import Container from '../components/Container';

function MainLayout() {
	return (
		<main>
			<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
				<NavBar />
				<FavoriteProvider>				
					<BannerComponent/>
					<Container>
						<Outlet />
					</Container>
				</FavoriteProvider>

				<Rodape />
			</div>
		</main>
	);
}

export default MainLayout;
