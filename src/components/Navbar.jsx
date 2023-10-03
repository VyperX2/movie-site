import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavbarSearch from "./NavbarSearch";
const Navbar = ({ darkMode, setDarkMode }) => {
	return (
		<div className=" bg-navbarbg dark:bg-black/80 ">
			<nav className="container text-white h-20 flex flex-col sm:flex-row items-center py-2 justify-between">
				<div className="sm:flex items-center justify-between w-full hidden ">
					<button
						onClick={() => {
							if (darkMode === "light") {
								setDarkMode((prev) => {
									prev = "dark";
									localStorage.setItem("theme", prev);
									return prev;
								});
							} else {
								setDarkMode((prev) => {
									prev = "light";
									localStorage.setItem("theme", prev);
									return prev;
								});
							}
						}}
					>
						<Brightness4Icon />
					</button>
					<NavbarSearch />
					<div className="flex items-center justify-center">
						<span className=" text-sm mr-2">LOGIN</span>
						<AccountCircleIcon />
					</div>
				</div>

				{/* Mobile screen display */}

				<div className="flex items-center justify-between w-full sm:hidden">
					<MenuIcon />
					<Brightness4Icon />
					<div className="flex items-center justify-center">
						<span className=" text-sm">LOGIN</span>
						<AccountCircleIcon />
					</div>
				</div>

				<div className=" sm:hidden">
					<NavbarSearch />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
