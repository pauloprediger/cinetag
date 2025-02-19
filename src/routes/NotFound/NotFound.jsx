import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
	return (
		<div className="not-found-container">
			<div className="film-frame">
				<img
					src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
					alt="Página não encontrada"
					className="not-found-image"
				/>
				<h1 className="error-title">404</h1>
				<p className="error-message">Oops! Parece que este filme não está no catálogo.</p>
				<p className="error-subtext">Mas não se preocupe, a aventura continua!</p>
				<Link to="/" className="back-home">
					Voltar para o início
				</Link>
			</div>
		</div>
	);
}

export default NotFound;
