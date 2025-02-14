import React from 'react';
import styles from './CabecalhoLink.module.css';
import { Link } from 'react-router-dom';

const CabecalhoLink = ({ children, url }) => {
	return (
		<Link to={url} className={styles.link}>
			{children}
		</Link>
	);
};

export default CabecalhoLink;
