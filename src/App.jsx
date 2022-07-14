// ! Overall Goals:
// !    - Easy and Fast to use
// !    - Secure Server Sign-In
// !    - Answers to sign-in questions to be used during the course of the meeting via a projector
// !    - POST data to Coach Accountable to be stored as a metric for user later on
// TODO (1) Add a way for Kevin to edit the form each month
// TODO (2) Clean up UX:
// TODO 	 - Change the font of the user input on Responses component
// TODO 	 - Format Responses component to display info properly, helpfully, and aesthetically
// TODO 	 - Add some animations(?)
// TODO (3) Add a Back-End or some other way to have data persist
// TODO    - POST data to Coach Accountable. See what Kevin thinks about that. Add ability to remove the data as well.

//React
import { useState } from "react";

//Internal
import Header from "./components/Header";
import MeetingForm from "./components/MeetingForm";
import Responses from "./components/Responses";
// import Modal from "./components/Modal";
import "./scss/App.scss";

export default function App() {
	const [responses, setResponses] = useState([]);
	// const [showModal, setShowModal] = useState(false);

	return (
		<div className="App">
			<Header />
			<MeetingForm
				onSubmit={(response) => setResponses([...responses, response])}
			/>
			<Responses responses={responses} />
			{/* <ResponsesModal
				responses={responses}
				showResponses={showResponses}
				onClose={() => setShowResponses(false)}
			/> */}
		</div>
	);
}
