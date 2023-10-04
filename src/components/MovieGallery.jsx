import React, { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import VITE_API_KEY from "../apikey";
import MovieContext from "../context/MovieContext";
import SelectedMovie from "./SelectedMovie";
import MoviePoster from "./MoviePoster";

const MovieGallery = () => {
	const [moviesData, setMoviesData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { movieId } = useContext(MovieContext);

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${VITE_API_KEY}`)
			.then((res) => res.json())
			.then((data) => {
				setMoviesData(data.results);
				setIsLoading(false);
			})
			.catch((err) => err);
	}, []);

	const selectedMovie = moviesData?.filter((movie) => movie.id === movieId);

	// console.log(moviesData);
	const firstMovie = moviesData[0];

	const remainingMovies = moviesData.filter(
		(movie) => JSON.stringify(movie) !== JSON.stringify(firstMovie)
	);

  console.log(remainingMovies);

	return (
		<>
			{isLoading ? (
				<h2>Loading</h2>
			) : (
				<main className=" dark:bg-darkbg -mb-3 ">
					<div hidden={movieId}>
						<MoviePoster posterMovie={firstMovie} />
					</div>
					{!movieId ? (
						<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-6 place-items-center container sm:py-12  dark:text-white py-6">
							{remainingMovies.map((movie) => (
								<MovieCard key={movie.id} {...movie} />
							))}
						</div>
					) : (
						<SelectedMovie selectedData={selectedMovie} />
					)}
				</main>
			)}
		</>
	);
};

export default MovieGallery;
