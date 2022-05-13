import styles from "./Input.module.scss";
// import { reduxForm, Field } from "redux-form";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { maxLength, isRequiredNoError } from "../../../../utils/formValidation";
import { RenderTextareaFormik } from "../../../_common/Inputs/Inputs";
import { useContext, useState } from "react";
import { AppContext } from "../../../../App";

const NewPostForm = (props) => {
    const appContext = useContext(AppContext);

    //validation

    const validateNewPostField = (value) => {
        let error = isRequiredNoError(value);
        !error && (error = maxLength(value, 500, appContext.currentLanguage));
        return error;
    };

    const submit = (values, actions) => {
        props.addPost(values.newPostText, props.currentUserId);
        actions.setSubmitting(false);
        actions.resetForm();
        setIsFormActive(false);
    };

    const [isFormActive, setIsFormActive] = useState(false);
    const inputDefaultHeight = isFormActive ? 62 : 40;

    const handleFocus = () => {
        setIsFormActive(true);
    };

    return (
        <Formik initialValues={{ newPostText: "" }} onSubmit={submit}>
            {({ isSubmitting }) => (
                <Form>
                    <Field
                        type="text"
                        name="newPostText"
                        component={RenderTextareaFormik}
                        validate={validateNewPostField}
                        placeholder={
                            appContext.currentLanguage === "eng" ? "What's new?" : appContext.currentLanguage === "ru" && "Напишите что-нибудь..."
                        }
                        defaultHeight={inputDefaultHeight}
                        maxHeight={"240px"}
                        onFocus={handleFocus}
                        // onBlur={handleBlur}
                    />
                    <ErrorMessage name="newPostText" component={ErrorComponent} />
                    {isFormActive && (
                        <button className={styles.button + " button"} type="submit" disabled={isSubmitting}>
                            {appContext.currentLanguage === "eng" && "Publish"} {appContext.currentLanguage === "ru" && "Опубликовать"}
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
