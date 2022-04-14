import React, { useEffect } from "react";
import styles from "./Input.module.scss";
// import { reduxForm } from "redux-form";
// import { Field } from "redux-form";
import { Field, Form, Formik } from "formik";
import { isRequiredNoError } from "../../../utils/formValidation";
import { RenderTextareaFormik } from "../../_common/Inputs/Inputs";

const validateNewMessageField = (value) => {
    let error = isRequiredNoError(value);
    return error;
};

const Input = (props) => {
    const submit = (values, actions) => {
        props.sendMessage(values.newMessageText);
        actions.setSubmitting(false);
        actions.resetForm();
    };

    return (
        <Formik initialValues={{ newMessageText: "" }} onSubmit={submit}>
            {({ isSubmitting }) => (
                <Form className={styles.form}>
                    <Field
                        type="text"
                        name="newMessageText"
                        component={RenderTextareaFormik}
                        validate={validateNewMessageField}
                        placeholder={"Type a message..."}
                        defaultHeight={40}
                        maxHeight={'200px'}
                    />

                    {/* <ErrorMessage name="newPostText" component={ErrorComponent} /> */}
                    <button className={styles.button} type="submit" disabled={isSubmitting}>
                        Send
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default Input;
