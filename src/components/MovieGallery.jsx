import React, { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import VITE_API_KEY from "../apikey";
import MovieContext from "../context/MovieContext";
import SelectedMovie from "./SelectedMovie";

const MovieGallery = () => {
	const [moviesData, setMoviesData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { movieId } = useContext(MovieContext);

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${VITE_API_KEY}`)
			.then((res) => res.json())
			.then((data) => setMoviesData(data.results))
			.catch((err) => err);

		setIsLoading(false);
	}, []);

	return (
		<>
			<main className=" dark:bg-darkbg ">
				{!movieId ? (
					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-6 place-items-center container sm:py-12  dark:text-white py-6">
						{moviesData.map((movie) => (
							<MovieCard key={movie.id} {...movie} />
						))}
					</div>
				) : (
					<SelectedMovie
						selectedData={moviesData.filter((movie) => movie.id === movieId)}
					/>
				)}
			</main>
		</>
	);
};

export default MovieGallery;
