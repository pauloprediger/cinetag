import React, { createContext, useState, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';

export const FavoriteContext = createContext();

FavoriteContext.displayName = 'Favorite';

export default function FavoriteProvider({ children }) {
	const [favorito, setFavorito] = useState([]);
	const value = useMemo(() => ({ favorito, setFavorito }), [favorito]);
	return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
}
FavoriteProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export function useFavoriteContext() {
	const { favorito, setFavorito } = useContext(FavoriteContext);

	function adicionaFavorito(novoFavorito) {
		const favoritoRepetido = favorito.some((item) => item.id === novoFavorito.id);

		const novaLista = [...favorito];

		if (!favoritoRepetido) {
			novaLista.push(novoFavorito);
			return setFavorito(novaLista);
		}

		const index = novaLista.findIndex((item) => item.id === novoFavorito.id);
		if (index !== -1) {
			novaLista.splice(index, 1);
		}
		return setFavorito(novaLista);
	}
	return { favorito, adicionaFavorito };
}
