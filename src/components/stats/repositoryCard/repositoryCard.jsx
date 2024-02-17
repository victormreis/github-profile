import mit from "../../../../public/Chield_alt.svg";
import star from "../../../../public/Star.svg";
import nesting from "../../../../public/Nesting.svg";

const RepositoryCard = ({repository}) => {

	const dataString = repository.updated_at  ;
	const dataFormatada = formatarData(dataString);


	function calcularDiferencaDias(data) {
		const dataAtual = new Date();
		const dataAtualizada = new Date(data);
		const diferencaMilissegundos = dataAtual - dataAtualizada;
		const diferencaDias = Math.floor(
			diferencaMilissegundos / (1000 * 60 * 60 * 24)
		);

		return diferencaDias;
	}

	function formatarData(data) {
		const diasAtras = calcularDiferencaDias(data);

		if (diasAtras === 0) {
			return "update today";
		} else if (diasAtras === 1) {
			return "updated yesterday";
		} else {
			return `updated ${diasAtras} ago`;
		}
	}

	return (
		<a target="_blank" href={repository.html_url} className="bg-gradient-to-l from-[#1C1B45] to-[#12172A] p-5 lg:p-8 rounded-lg mb-10">
			<h1 className="text-2xl mb-3">{repository.name}</h1>
			<p className="mb-3">
				{repository.description || "No Description available"}
			</p>
			<div className="flex gap-4">
				<div
					className={`${
						repository.license === null ? "hidden" : ""
					} flex items-center justify-center gap-3`}>
					<img
						className="pt-1"
						src={mit}
						alt="mit shield"
					/>
					<span>{repository?.license?.spdx_id}</span>
				</div>
				<div className="flex items-center justify-center gap-3">
					<img
						src={nesting}
						alt=""
					/>
					<span>{repository.forks}</span>
				</div>
				<div className="flex items-center justify-center gap-3">
					<img
						src={star}
						alt=""
					/>
					<span>{repository.stargazers_count}</span>
				</div>
				<span className="mt-1.5 text-xs">{dataFormatada}</span>
			</div>
		</a>
	);
};

export default RepositoryCard;
