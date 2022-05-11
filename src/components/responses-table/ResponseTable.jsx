import { Link } from "react-router-dom";

import Body from "./Body";

export default function ResponseTable({ responses }) {
	return (
		<>
			<table className="table">
				<Head />
				<Body responses={responses} />
			</table>
			<Link to="/meeting-sign-in" className="link">
				Go to Questions
			</Link>
		</>
	);
}

function Head() {
	return (
		<thead className="table-head">
			<tr className="thead-row">
				<th className="thead-cell">Name</th>
				<th className="thead-cell">Business</th>
				<th className="thead-cell">Personal</th>
				<th className="thead-cell">Relationships</th>
				<th className="thead-cell">[Something]</th>
				<th className="thead-cell">[Something]</th>
			</tr>
		</thead>
	);
}
