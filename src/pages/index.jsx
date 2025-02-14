import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Cards from '../components/Cards';

import Chihiro from '../assets/MoviePosters/chihiro.png';

function Inicio() {
	return (
		<Container className="mt-5 mb-5 bg-light">
			<Row className="gap-4 justify-content-center">
				<Col xs={12} md={6} lg={3}>
					<Link to="/player">
						<Cards movieName="A viagem de chirriro" imagem={Chihiro} />
					</Link>
				</Col>
				<Col xs={12} md={6} lg={3}>
					<Cards movieName="A viagem de chirriro" imagem={Chihiro} />
				</Col>
				<Col xs={12} md={6} lg={3}>
					<Cards movieName="A viagem de chirriro" imagem={Chihiro} />
				</Col>
				<Col xs={12} md={6} lg={3}>
					<Cards movieName="A viagem de chirriro" imagem={Chihiro} />
				</Col>
				<Col xs={12} md={6} lg={3}>
					<Cards movieName="A viagem de chirriro" imagem={Chihiro} />
				</Col>
				<Col xs={12} md={6} lg={3}>
					<Cards movieName="A viagem de chirriro" imagem={Chihiro} />
				</Col>
			</Row>
		</Container>
	);
}

export default Inicio;
