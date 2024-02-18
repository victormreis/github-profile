import {useState} from "react";
import "./header.css";
import {IoMdSearch} from "react-icons/io";

const Header = ({handleChangeInput, profile, setShouldShowRepos, getRepos}) => {
	const [shouldShowCard, setShouldShowCard] = useState(false);


  function onTyping(e) {
  setShouldShowCard(true)
  setShouldShowRepos(false)
  handleChangeInput(e.target.value)
  }
	function selectedProfile() {   
		setShouldShowCard(false);
		setShouldShowRepos(true);
    getRepos(profile.repos_url)
	};

  function handleKeyPress(e){   
		if (e.key === "Enter") {
			selectedProfile()
		}
	};
	return (
		<div className="h-72 w-full teste">
			<div className="flex justify-center pt-10 pl-3 text-[#4A5567] ">
				<IoMdSearch
					size={22}
					color=""
					className="-mr-9 mt-5 z-0"
				/>
				<input
					onChange={onTyping}
					className="py-4 pl-11 sm:w-2/5 rounded-md  bg-[#20293A] placeholder:text-[#4A5567] outline-none"
					type="text"
					placeholder="Username"
          onKeyDown={(e) =>handleKeyPress(e)}
				/>
			</div>
			{shouldShowCard && profile && (
				<div
					onClick={selectedProfile}					
					className="text-white py-2 m-auto w-3/5 sm:w-2/5 flex items-center gap-2 mt-2 rounded-md bg-[#20293A] cursor-pointer">
					<img
						className="w-20 rounded-2xl p-2"
						src={profile.avatar_url}
					/>
					<div className="flex flex-col gap-2">
						<p>{profile.name}</p>
						<p className="text-xs">{profile.bio}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
