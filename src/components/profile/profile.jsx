import RepositoryCard from "../stats/repositoryCard/repositoryCard";

const Profile = ({profile, repositories}) => {
	return (
		<div className="px-5 ml-3 lg:ml-60 md:ml-24 mt-5 text-[#CDD5E0] m-auto">
			<h1 className="text-[3em]">{profile.name}</h1>
			<p className="text-xl mt-3">{profile.bio}</p>

      <div className="mt-10 m-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {repositories.map((repository) => (
          <RepositoryCard key={repository.id} repository={repository} />
        ))}      
      </div>
		</div>
	);
};

export default Profile;
