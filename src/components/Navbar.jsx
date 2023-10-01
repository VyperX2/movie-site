import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavbarSearch from "./NavbarSearch";
const Navbar = () => {
	return (
		<div className="bg-sky-700 sm:w-[90%] ml-auto">
			<nav className="container text-white h-20 flex flex-col sm:flex-row items-center py-2 justify-between">
				<div className="sm:flex items-center justify-between w-full hidden ">
					<Brightness4Icon />
					<NavbarSearch />
					<div className="flex items-center justify-center">
						<span className=" text-sm">LOGIN</span>
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
