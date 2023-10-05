import { createContext, useContext, useState } from "react";

const MovieContext = createContext({});

export const MovieProvider = ({ children }) => {
	const [movieId, setMovieId] = useState("");
	const [searchedMovie, setSearchedMovie] = useState("");

	return (
		<MovieContext.Provider
			value={{
				movieId: movieId,
				searchedMovie: searchedMovie,
				setMovieId,
				setSearchedMovie,
			}}
		>
			{children}
		</MovieContext.Provider>
	);
};

export default MovieContext;
