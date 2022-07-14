// ! Overall Goals:
// !    - Easy and Fast to use
// !    - Secure Server Sign-In
// !    - Answers to sign-in questions to be used during the course of the meeting via a projector
// !    - POST data to Coach Accountable to be stored as a metric for user later on
// TODO (1) Add a modal for Kevin to edit the form each month
// TODO (2) Clean up UX:
// TODO 	 - Change the font of the user input on Responses component
// TODO 	 - Format Responses component to display info properly, helpfully, and aesthetically
// TODO 	 - Add some animations(?)
// TODO (3) Add a Back-End or some other way to have data persist
// TODO    - POST data to Coach Accountable. Add ability to remove the data as well.

//React
import { useState } from "react";

//Internal
import Header from "./components/Header";
import MeetingForm from "./components/MeetingForm";
import Responses from "./components/Responses";
import "./scss/App.scss";

export default function App() {
	const [responses, setResponses] = useState([]);

	// return (
	// 	<div className="App">
	// 		<Header />
	// 		<MeetingForm
	// 			onSubmit={(response) => setResponses([...responses, response])}
	// 		/>
	// 		<Responses responses={responses} />
	// 	</div>
	// );

	return (
		<div className="App">
			<header className="App-header">
				<p>A simple React app.....</p>

				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<form action="../../post" method="post" className="form">
					<button type="submit">Connected?</button>
				</form>
			</header>
		</div>
	);
}
