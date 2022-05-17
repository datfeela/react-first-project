import React, { useContext, useEffect, useState } from "react";
import styles from "./Status.module.scss";
import Preloader from "./../../../_common/Preloader/Preloader";
// import { Field } from "redux-form";
// import { reduxForm } from "redux-form";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { RenderInputFormik } from "../../../_common/Inputs/Inputs";
import { AppContext } from "../../../../App";

const Status = (props) => {
    const appContext = useContext(AppContext);

    const [isEditMode, setIsEditMode] = useState(false);
    let statusBlockRef = React.useRef();

    const activateEditMode = () => {
        if (!props.requestInProgress && props.isOwner) {
            setIsEditMode(true);
            document.addEventListener("mousedown", handleClick);
        }
    };

    const deactivateEditMode = () => {
        setIsEditMode(false);
        document.removeEventListener("mousedown", handleClick);
    };

    const saveStatus = (value) => {
        setIsEditMode(false);
        document.removeEventListener("mousedown", handleClick);
        props.updateStatus(value);
    };

    const handleClick = (e) => {
        if (!statusBlockRef.current) document.removeEventListener("mousedown", handleClick);
        if (!statusBlockRef.current.contains(e.target)) {
            deactivateEditMode();
        }
    };

    const statusClassName = props.isOwner ? styles.text + " " + styles.text_editable : styles.text;

    return (
        <div ref={statusBlockRef} className={appContext.currentTheme === "dark" ? styles.wrap + " " + styles.wrap_dark : styles.wrap}>
            <span onClick={activateEditMode} className={statusClassName}>
                {props.status ? props.status : props.isOwner ? "type something here..." : ""}
            </span>
            {props.requestInProgress && <Preloader />}
            {/* {isEditMode && <ReduxStatusForm value={props.status} onSubmit={saveStatus} />} */}
            {isEditMode && <StatusForm saveStatus={saveStatus} value={props.status} />}
        </div>
    );
};

export default Status;

const StatusForm = ({ saveStatus, value }) => {
    const appContext = useContext(AppContext);

    const submit = (values, actions) => {
        saveStatus(values.statusEditMode);
        actions.setSubmitting(false);
    };

    return (
        <div className={styles.edit_mode_block}>
            <Formik initialValues={{ statusEditMode: value }} onSubmit={submit}>
                {({ isSubmitting }) => (
                    <Form>
                        <Field
                            type="text"
                            name="statusEditMode"
                            component={RenderInputFormik}
                            autoComplete={"off"}
                            autoFocus={true}
                            options={{
                                padding: "5px 9px",
                                showErrors: true,
                                inputMaxLength: 300,
                            }}
                        />
                        <button type="submit" disabled={isSubmitting} className={styles.save_button + " button"}>
                            {appContext.currentLanguage === "eng" && "Save"} {appContext.currentLanguage === "ru" && "Сохранить"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
