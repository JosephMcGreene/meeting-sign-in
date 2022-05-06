export default function Body({ responses }) {
	return (
		<tbody className="table-body">
			{responses.map((cell) => {
				return (
					<Row
						key={responses.indexOf(cell)}
						name={cell.name}
						personal={cell.personal}
						business={cell.business}
						relationships={cell.relationships}
					/>
				);
			})}
			{/* <Row name="name" /> */}
		</tbody>
	);
}

function Row({ name, personal, business, relationships }) {
	return (
		<tr className="tbody-row">
			<td className="tbody-cell">{name}</td>
			<td className="tbody-cell">{personal}</td>
			<td className="tbody-cell">{business}</td>
			<td className="tbody-cell">{relationships}</td>
			<td className="tbody-cell">[Something]</td>
			<td className="tbody-cell">[Something]</td>
		</tr>
	);
}
