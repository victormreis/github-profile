import Card from "../card/card";
import Stats from "../stats/stats";

const Section = ({profile}) => {
	return (
		<div className="flex sm:px-10 lg:ml-28 justify-center">
			<Card image={profile?.avatar_url} />
			<div className=" flex flex-col  w-3/5 px-2 lg:flex-row gap-5 mt-3 lg:w-full">			
					<Stats text='Followers' statsNumber={profile.followers}/>
					<Stats  text='Following' statsNumber={profile.following}/>
					<Stats text='Location' statsNumber={profile.location} />
				
			</div>
		</div>
	);
};

export default Section;
