import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MovieContext from "../context/MovieContext";

const NavbarSearch = () => {
	const [formValue, setFormValue] = useState("");

	const { setSearchedMovie } = useContext(MovieContext);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				setFormValue((prev) => prev.replaceAll(" ", "+"));
				setSearchedMovie(formValue);
        setFormValue("")
			}}
			action=""
			className=" border-white border-opacity-50 border-b flex items-center"
		>
			<button>
				<SearchIcon style={{ color: "white", opacity: 0.5 }} />
			</button>
			<input
				onChange={(e) => setFormValue(e.target.value)}
				value={formValue}
				type="text"
				className=" outline-none bg-transparent"
			/>
		</form>
	);
};

export default NavbarSearch;
