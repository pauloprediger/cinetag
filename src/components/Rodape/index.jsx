import React from 'react';
import { MDBFooter} from 'mdb-react-ui-kit';
import styles from './Rodape.module.css';

function Rodape() {
	return (
		<MDBFooter className={`text-center text-white ${styles.rodape}`}>
			<div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
				<p>© 2024 Copyright: Desenvolvido por <a href="https://github.com/pauloprediger" rel = "noreferrer noopener" target='_blank'>Paulo Prediger</a></p>
			</div>
		</MDBFooter>
	);
}

export default Rodape;
