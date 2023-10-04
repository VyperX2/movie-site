import React, { useContext } from "react";
import MovieContext from "../context/MovieContext";

const MovieCard = ({ original_title, poster_path, id, movie }) => {
	const { movieId, setMovieId } = useContext(MovieContext);

	return (
		<div
			onClick={() => {
				setMovieId(id);
			}}
			className="flex flex-col w-60 items-center py-4 gap-2 overflow-hidden"
		>
			<img
				src={`https://image.tmdb.org/t/p/original//${poster_path}`}
				alt=""
				className=" w-52 object-cover rounded-lg hover:scale-[1.05] mb-1 cursor-pointer transition-all"
			/>
			<h4 className=" text-2xl">{original_title.substring(0,20)}</h4>
		</div>
	);
};

export default MovieCard;
