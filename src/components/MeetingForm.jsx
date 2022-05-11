// import editPencil from "../img/pencil-alt-solid.svg";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Header from "./Header";
import InputField from "./InputField";
import Select from "./Select";

export default function MeetingForm({ onSubmit }) {
	const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<>
			<Header />
			<Formik
				initialValues={{
					name: "",
					email: "",
					business: "",
					personal: "",
					relationships: "",
					monthlyResponse: "",
				}}
				validationSchema={Yup.object({
					name: Yup.string().required("Name is required"),
					email: Yup.string()
						.email("Invalid email address")
						.required("Email is required"),
					business: Yup.number().required("Don't forget this one!"),
					personal: Yup.number().required("Don't forget this one!"),
					relationships: Yup.number().required("Don't forget this one!"),
					monthlyResponse: Yup.string().required("Don't forget this one!"),
				})}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						onSubmit(values);
						actions.setSubmitting(false);
					});
				}}
			>
				<Form className="form">
					<InputField
						label="Name:"
						name="name"
						type="input"
						className="name-and-email"
					/>
					<InputField
						label="Email:"
						name="email"
						type="input"
						className="name-and-email"
					/>
					<Select label="How is your business?" name="business">
						<option value="">-- Select a Rating --</option>
						{ratings.map((rating) => {
							return (
								<option value={rating} key={`b${rating}`}>
									{rating}
								</option>
							);
						})}
					</Select>
					<Select label="How is your personal health?" name="personal">
						<option value="">-- Select a Rating --</option>
						{ratings.map((rating) => {
							return (
								<option value={rating} key={`p${rating}`}>
									{rating}
								</option>
							);
						})}
					</Select>
					<Select label="How are your relationships?" name="relationships">
						<option value="">-- Select a Rating --</option>
						{ratings.map((rating) => {
							return (
								<option value={rating} key={`r${rating}`}>
									{rating}
								</option>
							);
						})}
					</Select>
					<InputField
						label="[Monthly Response]"
						name="monthlyResponse"
						type="textarea"
						className="rating"
					/>
					<button type="submit" className="submit-btn">
						Submit
					</button>
				</Form>
			</Formik>
			<Link to="/responses" className="link">
				Go to Responses
			</Link>
		</>
	);
}
