import React from "react";

const MovieCard = ({ original_title, poster_path }) => {
	return (
		<div className="flex flex-col w-60 items-center py-4 gap-2 overflow-hidden ">
			<img
				src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
				alt=""
				className=" w-52 object-cover rounded-lg hover:scale-[1.05] mb-1 cursor-pointer transition-all"

			/>
			<h4 className=" text-2xl">{original_title}</h4>
		</div>
	);
};

export default MovieCard;
