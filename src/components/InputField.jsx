// TODO Finish this component

import { Field, useField } from "formik";

export default function InputField({ label, type, className, ...props }) {
	const [field, meta] = useField(props);

	return (
		<div className={className}>
			<label htmlFor={props.id || props.name}>{label}</label>
			<Field {...field} {...props} as={type}></Field>

			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
}
