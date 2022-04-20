import React, { useRef } from "react";
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

const Input = ({ dialogId, onInputHeightChange, ...props }) => {
    const wrapRef = useRef();
    // wrapRef.current && console.log(window.getComputedStyle(wrapRef.current).height);

    const submit = (values, actions) => {
        props.sendMessage(dialogId, values.newMessageText);
        onInputHeightChange('67px')
        actions.setSubmitting(false);
        actions.resetForm();
    };

    const onHeightChange = () => {
        onInputHeightChange(window.getComputedStyle(wrapRef.current).height);
    };

    return (
        <div ref={wrapRef} className={styles.wrap}>
            <Formik initialValues={{ newMessageText: "" }} onSubmit={submit}>
                {({ isSubmitting }) => (
                    <Form className={styles.form}>
                        <Field
                            type="text"
                            name="newMessageText"
                            component={RenderTextareaFormik}
                            onHeightChange={onHeightChange}
                            validate={validateNewMessageField}
                            placeholder={"Type a message..."}
                            defaultHeight={40}
                            maxHeight={"200px"}
                        />

                        {/* <ErrorMessage name="newPostText" component={ErrorComponent} /> */}
                        <button className={styles.button} type="submit" disabled={isSubmitting}>
                            Send
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Input;
