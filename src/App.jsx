// ! Overall Goals:
// !    - Easy and Fast to use
// !    - Secure Server Sign-In
// !    - Answers to sign-in questions to be used during the course of the meeting via a projector
// TODO (2) Add 4th and 5th questions to form (see past iterations of this project)
// TODO    - Add modals so Kevin can edit the form each month
// TODO (3) Add a Back-End

import { useState } from "react";

import MeetingForm from "./components/MeetingForm";
import ResponsesModal from "./components/ResponsesModal";
import "./scss/App.scss";

export default function App() {
	const [responses, setResponses] = useState([]);
	const [showResponses, setShowResponses] = useState(false);

	function addResponse(response) {
		setResponses([...responses, response]);
	}

	function closeResponses() {
		setShowResponses(false);
	}

	return (
		<div className="App">
			<MeetingForm onSubmit={addResponse} />
			<button
				className="btn show-responses-btn"
				onClick={() => setShowResponses(true)}
			>
				Show Responses
			</button>
			<ResponsesModal
				responses={responses}
				showResponses={showResponses}
				onClose={closeResponses}
			/>
		</div>
	);
}
