import styles from "./Input.module.scss";
// import { reduxForm, Field } from "redux-form";
import { ErrorMessage, Field, Formik } from "formik";
import { maxLength, isRequiredNoError } from "../../../../utils/formValidation";
import { renderTextarea, renderTextareaFormik } from "../../../_common/Inputs/Inputs";

//validation
const maxLength500 = maxLength(500);

const validateNewPostField = (value) => {
    let error = isRequiredNoError(value);
    !error && (error = maxLength500(value));
    return error;
};

const NewPostForm = (props) => {
    const submit = (values, actions) => {
        props.addPost(values.newPostText);
        actions.setSubmitting(false);
        actions.resetForm();
    };
    return (
        <Formik initialValues={{ newPostText: "" }} onSubmit={submit}>
            {({ values, handleChange, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        type="text"
                        name="newPostText"
                        onChange={handleChange}
                        value={values.newPostText}
                        component={renderTextareaFormik}
                        validate={validateNewPostField}
                        placeholder={"What's new?"}
                    />
                    <ErrorMessage name="newPostText" component={ErrorComponent} />
                    <button className={styles.button} type="submit" disabled={isSubmitting}>
                        Publish
                    </button>
                </form>
            )}
        </Formik>
    );
};

export default NewPostForm;

const ErrorComponent = (props) => {
    console.log(props);
    return <div>{props.children}</div>;
};
