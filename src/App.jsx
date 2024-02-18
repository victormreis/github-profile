import {useEffect, useState} from "react";
import Header from "./components/header/header";
import Profile from "./components/profile/profile";
import Section from "./components/section/section";
import {useDebounce} from "use-debounce";

function App() {
	const APIURL = "https://api.github.com";
	const [username, setUsername] = useState("github");
	const [repositories, setRepositories] = useState([]);
	const [shouldShowRepos, setShouldShowRepos] = useState(true);
	const [profile, setProfile] = useState([]);
	const [debounceText] = useDebounce(username, 500);

	useEffect(() => {
		// return
		fetch(`${APIURL}/users/${username}`)
			.then((response) => response.json())
			.then((data) => {
				if (data?.message) {
					setProfile(null);
					return;
				}
				setProfile(data);
				getRepos(data.repos_url);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [debounceText]);

	function getRepos(url) {
		fetch(`${url}`)
			.then((response) => response.json())
			.then((data) => {
				const repositories = data.slice(0, 4);
				setRepositories(repositories);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function handleChangeInput(input) {
		setUsername(input);
	}

	return (
		<>
			<Header
				handleChangeInput={handleChangeInput}
				getRepos={getRepos}
				profile={profile}
				setShouldShowRepos={setShouldShowRepos}
			/>

			{profile && setShouldShowRepos ? (
				<div className={`${shouldShowRepos ? "" : "hidden"}`}>
					<Section profile={profile} />
					<Profile
						repositories={repositories}
						profile={profile}
					/>
					<div className="text-white mt-10 mb-10 text-center hover:text-cyan-800">
						<a
							target="_blank"
							href={profile.html_url}>
							View all repositories
						</a>
					</div>
				</div>
			) : (
				<div className="flex flex-col justify-center items-center mb-20 gap-3 mt-5 text-white">
					<h1 className="text-3xl">{`${username ? 'Profile not Found' : 'Type a name to find the profile'}`}</h1>
					<img
						src="https://freefrontend.com/assets/img/tailwind-404-page-templates/404-page-not-found.png"
						className={`${!username ? 'hidden' : "w-2/5"}`}
						alt=""
					/>
				</div>
			)}
		</>
	);
}

export default App;
