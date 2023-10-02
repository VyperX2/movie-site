import React from "react";

const Sidebar = () => {
	return (
		<nav className="hidden sm:flex fixed left-0 top-0 bottom-0 overflow-y-scroll 2xl:w-[15vw] lg:w-[20vw] md:w-[25vw] flex-col ">
			<img
				className=" block mx-auto h-16 w-42 my-4"
				src="https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png"
				alt=""
			/>
      <hr />
		</nav>
	);
};

export default Sidebar;
