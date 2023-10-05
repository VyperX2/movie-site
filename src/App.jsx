import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./context/MovieContext";
import MovieGallery from "./components/MovieGallery";

const App = () => {
	useEffect(() => {
		localStorage.setItem("theme", "light");
	}, []);

	const [darkMode, setDarkMode] = useState(localStorage.getItem("theme"));

	console.log(darkMode);

	return (
		<MovieProvider>
			<div className={`${darkMode}`}>
				<Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
				<MovieGallery />
			</div>
		</MovieProvider>
	);
};

export default App;
