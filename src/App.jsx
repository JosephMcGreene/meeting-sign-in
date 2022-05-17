// ! Overall Goals:
// !    - Easy and Fast to use
// !    - Secure Server Sign-In
// !    - Answers to sign-in questions to be used during the course of the meeting via a projector
// TODO (1) Add 4th and 5th questions to form (see past iterations of this project)
// TODO    - Add a way for Kevin to edit the form each month
// TODO (2) Clean up UX:
// TODO 	 - Stop user from submitting more than once(?)
// TODO 	 - Add some animations(?)
// TODO (3) Add a Back-End or some other way to have data persist

//React
import { useState } from "react";

//Internal
import Header from "./components/Header";
import MeetingForm from "./components/MeetingForm";
import ResponsesModal from "./components/ResponsesModal";
import "./scss/App.scss";

export default function App() {
	const [responses, setResponses] = useState([]);
	const [showResponses, setShowResponses] = useState(false);

	return (
		<div className="App">
			<Header />
			<MeetingForm
				onSubmit={(response) => setResponses([...responses, response])}
			/>
			<button
				className="btn show-responses-btn"
				onClick={() => setShowResponses(true)}
			>
				Show Responses
			</button>
			<ResponsesModal
				responses={responses}
				showResponses={showResponses}
				onClose={() => setShowResponses(false)}
			/>
		</div>
	);
}
