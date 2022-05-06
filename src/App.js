// ! Overall Goals:
// !    - Easy and Fast to use
// !    - Secure Server Sign-In
// !    - Answers to sign-in questions to be used during the course of the meeting via a projector
// TODO (1) Finish learning the necessary Formik to make the form the best it can be!
// TODO    - https://formik.org/docs/tutorial
// TODO (2) Add 4th and 5th questions to form (see past iterations of this project)
// TODO    - Add modals so Kevin can edit the form each month
// TODO (3) Add a Back-End

import { Routes, Route } from "react-router-dom";

import { useState } from "react";

import MeetingForm from "./components/MeetingForm";
// import Modal from "./components/Modal";
import ResponseTable from "./components/responses-table/ResponseTable";
import "./scss/App.scss";

export default function App() {
	const [responses, setResponses] = useState([]);

	function addResponse(response) {
		setResponses([...responses, response]);
	}

	return (
		<Routes>
			<Route path="/" element={<MeetingForm onSubmit={addResponse} />} />
			<Route
				path="/responses"
				element={<ResponseTable responses={responses} />}
			/>
		</Routes>
	);
}
