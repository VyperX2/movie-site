import React, { useContext } from "react";
import MovieContext from "../context/MovieContext";

const SelectedMovie = ({ selectedData }) => {
	const { movieId, setMovieId } = useContext(MovieContext);
	const data = selectedData[0];

	const {
		original_title,
		overview,
		poster_path,
		release_date,
		vote_average,
		vote_count,
		original_language,
		popularity,
		backdrop_path,
	} = data;

	console.log(selectedData);

	return (
		<div className="dark:bg-darkbg h-screen overflow-hidden -mb-3">
			<button
				onClick={() => setMovieId("")}
				className="dark:text-white mx-auto block pt-6"
			>
				BACK
			</button>
			<div className="container_two pt-8 w-full flex flex-col lg:flex-row h-full 2xl:gap-x-96 md:gap-x-52 px-4">
				<img
					src={`https://image.tmdb.org/t/p/original//${poster_path}`}
					alt=""
					className=" object-cover object-center md:w-96 w-[90%] rounded-lg shadow-2xl shadow-black dark:shadow-gray-600 md:h-[75%] mx-auto lg:mx-0"
				/>
				<div className="flex flex-col gap-y-8 items-center dark:text-white mt-10 lg:mt-0 md:mx-0">
					<h1 className="lg:text-5xl text-3xl md:text-4xl font-semibold">
						{original_title}
						<span> ({release_date.substring(0, 4)})</span>
					</h1>
					<h2 className=" text-4xl">Overview</h2>
					<h2 className=" text-2xl">{overview}</h2>
					<div className="flex justify-between w-full">
						<h4>
							Language :{" "}
							<span className=" font-semibold">{original_language}</span>
						</h4>
						<h4>
							Release Date :{" "}
							<span className=" font-semibold">{release_date} </span>
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SelectedMovie;
