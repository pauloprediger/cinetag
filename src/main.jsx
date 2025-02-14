import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './routes/routes';
import './styles/reset.css';
import './styles/variables.css';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AppRoutes />
	</StrictMode>
);
