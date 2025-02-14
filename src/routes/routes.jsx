import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../pages/MainLayout';
import Inicio from '../pages/index';
import Favorito from '../pages/favorito';
import Player from '../pages/player';
import NotFound from './NotFound/NotFound';

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Inicio />} />
					<Route path="/favorito" element={<Favorito />} />
                    <Route path="/player" element={<Player />} />
					<Route path="/*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
