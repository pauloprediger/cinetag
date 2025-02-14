import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Rodape from '../components/Rodape';
import BannerComponent from '../components/Banner';

function MainLayout() {
	return (
		<div style={{ 
			display: 'flex', 
			flexDirection: 'column', 
			minHeight: '100vh' 
		}}>
			<NavBar />
			<BannerComponent />
			<main style={{ flex: 1 }}>
				<Outlet />
			</main>
			<Rodape />
		</div>
	);
}

export default MainLayout;
