import React, { useContext } from "react";
import MovieContext from "../context/MovieContext";

const MoviePoster = ({ posterMovie }) => {
	const { movieId, setMovieId } = useContext(MovieContext);

	return (
		<div className="dark:bg-darkbg dark:text-white ">
			<div className="container pt-8 sm:pt-20 ">
				<div
					onClick={() => setMovieId(posterMovie.id)}
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/original//${posterMovie.backdrop_path})`,
					}}
					alt=""
					className=" w-full md:h-[450px] h-64 bg-cover bg-center rounded-md relative cursor-pointer poster overflow-hidden "
				>
					<div className=" absolute w-full h-full bg-black/30" />
					<div className=" absolute bottom-3 flex flex-col left-3 ">
						<h4 className=" text-lg md:text-3xl text-white">
							{posterMovie.original_title}
						</h4>
						<h4 className=" text-sm md:w-[50%] w-full text-white">
							{posterMovie.overview}
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoviePoster;
