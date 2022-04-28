import styles from "./Input.module.scss";
// import { reduxForm, Field } from "redux-form";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { maxLength, isRequiredNoError } from "../../../../utils/formValidation";
import { RenderTextareaFormik } from "../../../_common/Inputs/Inputs";
import { useState } from "react";

//validation
const maxLength500 = maxLength(500);

const validateNewPostField = (value) => {
    let error = isRequiredNoError(value);
    !error && (error = maxLength500(value));
    return error;
};

const NewPostForm = (props) => {
    const submit = (values, actions) => {
        props.addPost(values.newPostText, props.currentUserId);
        actions.setSubmitting(false);
        actions.resetForm();
        setIsFormActive(false);
    };

    const [isFormActive, setIsFormActive] = useState(false);
    const inputDefaultHeight = isFormActive ? 62 : 40;

    const handleFocus = () => {
        setIsFormActive(true)
    }

    return (
        <Formik initialValues={{ newPostText: "" }} onSubmit={submit}>
            {({ isSubmitting }) => (
                <Form>
                    <Field
                        type="text"
                        name="newPostText"
                        component={RenderTextareaFormik}
                        validate={validateNewPostField}
                        placeholder={"What's new?"}
                        defaultHeight={inputDefaultHeight}
                        maxHeight={"240px"}
                        onFocus={handleFocus}
                        // onBlur={handleBlur}
                    />
                    <ErrorMessage name="newPostText" component={ErrorComponent} />
                    {isFormActive && (
                        <button className={styles.button} type="submit" disabled={isSubmitting}>
                            Publish
                        </button>
                    )}
                </Form>
            )}
        </Formik>
    );
};

export default NewPostForm;

const ErrorComponent = (props) => {
    console.log(props);
    return <div>{props.children}</div>;
};
