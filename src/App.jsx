import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MovieGallery from "./components/MovieGallery";

const App = () => {
  const [darkMode , setDarkMode] = useState("")

	return (
		<div className={`${darkMode}`}>
			<Navbar setDarkMode={setDarkMode} />
      <MovieGallery />
		</div>
	);
};

export default App;
