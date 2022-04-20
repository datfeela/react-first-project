import { ErrorMessage, Field, Formik } from "formik";

// const validateForm = (values) => {
//     const errors = {};
//     if (!values.email) {
//         errors.email = "This field is required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = "Invalid email address";
//     }
//     if (!values.password) {
//         errors.password = "This field is required";
//     }
//     return errors;
// };

// const validateNewPostField = (value) => {
//     let error = isRequired(value);
//     !error && (error = validateEmail(value));
//     return error;
// };

const validateEmail = (value) => {
    let error;
    if (!value) {
        error = "This field is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = "Invalid email address";
    }
    return error;
};

const validatePassword = (value) => {
    let error;
    if (!value) {
        error = "This field is required";
    }
    return error;
};

const Comp = (props) => {
    const submit = (values, { setSubmitting }) => {
        debugger;
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };
    return (
        <Formik initialValues={{ email: "", password: "" }} onSubmit={submit}>
            {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                isValid,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        component={renderInput}
                        validate={validateEmail}
                    />
                    <ErrorMessage name="email" component={PopupWtError} />
                    <Field
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        component={renderInput}
                        validate={validatePassword}
                    />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    );
};

const renderInput = (props) => {
    // debugger;
    return (
        <input
            type={props.type}
            name={props.field.name}
            onChange={props.form.handleChange}
            onBlur={props.form.handleBlur}
            value={props.field.value}
        />
    );
};

const PopupWtError = (props) => {
    console.log(props);
    return <div>{props.children}</div>;
};

export default Comp;
