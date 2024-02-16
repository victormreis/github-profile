import "./header.css";
import {IoMdSearch} from "react-icons/io";

const Header = () => {
	return (
		<div className="h-72 w-full teste">
			<div className="flex justify-center pt-10 text-[#4A5567]">
				<IoMdSearch size={22} color="" className="-mr-9 mt-3 z-0"/>
				<input
					className="py-3 pl-11 w-2/5 rounded-md  bg-[#20293A] placeholder:text-[#4A5567] outline-none"
					type="text"
					placeholder="Username"
          
				/>
			</div>
		</div>
	);
};

export default Header;
