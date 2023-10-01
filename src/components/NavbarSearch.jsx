import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const NavbarSearch = () => {
	return (
		<form
			action=""
			className=" border-white border-opacity-50 border-b flex items-center"
		>
			<SearchIcon style={{ color: "white", opacity: 0.5 }} />
			<input type="text" className=" outline-none bg-transparent" />
		</form>
	);
};

export default NavbarSearch;
