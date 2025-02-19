import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../pages/MainLayout';
import Inicio from '../pages/Inicio/index';
import Favorito from '../pages/Favorito/Favorito';
import Player from '../pages/Player/Player';
import NotFound from './NotFound/NotFound';

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Inicio />} />
					<Route path="/favorito" element={<Favorito />} />
					<Route path=":id" element={<Player />} />
					<Route path="/*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
