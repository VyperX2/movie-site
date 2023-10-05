import React, { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import VITE_API_KEY from "../apikey";
import MovieContext from "../context/MovieContext";
import SelectedMovie from "./SelectedMovie";
import MoviePoster from "./MoviePoster";

const MovieGallery = () => {
	const [moviesData, setMoviesData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { movieId, searchedMovie, setSearchedMovie } = useContext(MovieContext);
	const [searchedMovieData, setSearchedMovieData] = useState(null);

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${VITE_API_KEY}`)
			.then((res) => res.json())
			.then((data) => {
				setMoviesData(data.results);
				setIsLoading(false);
			})
			.catch((err) => err);
	}, []);

	useEffect(() => {
		if (searchedMovie) {
			fetch(
				`https://api.themoviedb.org/3/search/movie?query=${searchedMovie}&include_adult=false&language=en-US&page=1&api_key=${VITE_API_KEY}`
			)
				.then((res) => res.json())
				.then((data) => {
					setSearchedMovieData(data.results);
				})
				.catch((err) => err);
		}
	}, [searchedMovie]);

	const selectedMovie = moviesData?.filter((movie) => movie.id === movieId);
	const searchedSelectedMovie = searchedMovieData?.filter(
		(movie) => movie.id === movieId
	);

	console.log(searchedMovieData);
	const firstMovie = moviesData[0];

	const remainingMovies = moviesData.filter(
		(movie) => JSON.stringify(movie) !== JSON.stringify(firstMovie)
	);

	return (
		<>
			{isLoading ? (
				<h2 className="flex h-screen text-8xl justify-center items-center w-screen">
					Loading...
				</h2>
			) : (
				<main className=" dark:bg-darkbg -mb-3  ">
					{searchedMovie ? (
						<>
							{movieId ? null : (
								<button
									onClick={() => {
										setSearchedMovie("");
										console.log(searchedMovie);
									}}
									className=" container dark:text-white mt-2 text-2xl"
								>
									Back
								</button>
							)}
							{!movieId ? (
								<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-6 gap-x-16 place-items-center container sm:py-12  dark:text-white py-6">
									{searchedMovieData?.map((movie) => (
										<MovieCard key={movie.id} {...movie} />
									))}
								</div>
							) : (
								<SelectedMovie selectedData={searchedSelectedMovie} />
							)}
						</>
					) : (
						<>
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
						</>
					)}
				</main>
			)}
		</>
	);
};

export default MovieGallery;
