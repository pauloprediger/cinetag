import React from 'react';
import PropTypes from 'prop-types';
import styles from './Titulo.module.css';

function Titulo({children}) {
	return <div className= {styles.texto}>{children}</div>;
}

Titulo.propTypes = { 
    children: PropTypes.node.isRequired,
}

export default Titulo;
