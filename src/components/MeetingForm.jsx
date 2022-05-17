//External
import { Formik, Form } from "formik";
import * as Yup from "yup";

//Internal
// import editPencil from "../img/pencil-alt-solid.svg";
import InputField from "./InputField";
import Select from "./Select";

export default function MeetingForm({ onSubmit }) {
	const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<Formik
			initialValues={{
				// element's name attribute must match this name:
				name: "",
				business: "",
				personal: "",
				relationships: "",
				monthlyIssue: "",
				monthlyGoal: "",
			}}
			validationSchema={Yup.object({
				name: Yup.string().required("Name is required"),
				// email: Yup.string()
				// 	.email("Invalid email address")
				// 	.required("Email is required"),
				business: Yup.number().required("Don't forget this one!"),
				personal: Yup.number().required("Don't forget this one!"),
				relationships: Yup.number().required("Don't forget this one!"),
				monthlyIssue: Yup.string().required("Don't forget this one!"),
				monthlyGoal: Yup.string().required("Don't forget this one!"),
			})}
			onSubmit={(values, actions) => {
				// // alert(JSON.stringify(values, null, 2));
				// onSubmit(values);
				// actions.setSubmitting(false);

				setTimeout(() => {
					// alert(JSON.stringify(values, null, 2));
					onSubmit(values);
					actions.setSubmitting(false);
				}, 300);
			}}
		>
			{({ isSubmitting, submitCount }) => (
				<Form className="form">
					<InputField
						label="Name:"
						name="name"
						type="input"
						className="personal-info"
					/>

					<Select
						label="How is your business?"
						name="business"
						className="rating"
					>
						<option value="">-- Select a Rating --</option>
						{ratings.map((rating) => {
							return (
								<option value={rating} key={`b${rating}`}>
									{rating}
								</option>
							);
						})}
					</Select>

					<Select
						label="How is your personal health?"
						name="personal"
						className="rating"
					>
						<option value="">-- Select a Rating --</option>
						{ratings.map((rating) => {
							return (
								<option value={rating} key={`p${rating}`}>
									{rating}
								</option>
							);
						})}
					</Select>

					<Select
						label="How are your relationships?"
						name="relationships"
						className="rating"
					>
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
						label="Issue to process today:"
						name="monthlyIssue"
						type="textarea"
						className="textarea"
					/>

					<InputField
						label="Goal before next meeting:"
						name="monthlyGoal"
						type="textarea"
						className="textarea"
					/>

					<button type="submit" className="btn">
						{isSubmitting ? "Submitting..." : "Submit"}
					</button>

					{submitCount >= 1 ? (
						<span className="submit-confirmation">Got it, thanks!</span>
					) : (
						""
					)}
				</Form>
			)}
		</Formik>
	);
}
