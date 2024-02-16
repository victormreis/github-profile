import Card from "../card/card";
import Stats from "../stats/stats";

const Section = () => {
	return (
		<div className="flex px-10 justify-center">
			<Card />
			<div className=" flex flex-col justify-center w-3/5 px-8 lg:flex-row gap-5 mt-3 lg:w-full">			
					<Stats />
					<Stats />
					<Stats />
				
			</div>
		</div>
	);
};

export default Section;
