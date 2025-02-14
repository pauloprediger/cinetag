import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

import Logo from '../../assets/logo.png';
import CabecalhoLink from './CabecalhoLink';

function NavBar() {
	return (
		<header className={styles.cabecalho}>
			<Link to="./">
				<img src={Logo} alt="Logo do cinetag" />
			</Link>
			<Navbar expand="lg" className="bg-secondary">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<CabecalhoLink url="./">Home</CabecalhoLink>
							<CabecalhoLink url="/Favoritos">Favoritos</CabecalhoLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}

export default NavBar;
