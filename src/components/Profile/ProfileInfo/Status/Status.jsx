import React, { useEffect, useState } from "react";
import styles from "./Status.module.scss";
import Preloader from "./../../../_common/Preloader/Preloader";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { renderInput } from "../../../_common/Inputs/Inputs";

const Status = (props) => {
    const [isEditMode, setIsEditMode] = useState(false);
    let statusBlockRef = React.useRef();

    const activateEditMode = () => {
        if (!props.requestInProgress) {
            setIsEditMode(true);
            document.addEventListener("mousedown", handleClick);
        }
    };

    const deactivateEditMode = () => {
        setIsEditMode(false);
        document.removeEventListener("mousedown", handleClick);
    };

    const saveStatus = (formData) => {
        setIsEditMode(false);
        document.removeEventListener("mousedown", handleClick);
        props.updateStatus(formData.statusEditMode);
    };

    const handleClick = (e) => {
        if (!statusBlockRef.current.contains(e.target)) {
            deactivateEditMode();
        }
    };

    return (
        <div className={styles.wrap}>
            <div ref={statusBlockRef} className={styles.wrap}>
                <span onClick={activateEditMode} className={styles.text}>
                    {props.status ? props.status : "type something here..."}
                </span>
                {props.requestInProgress && <Preloader />}
                {isEditMode && <ReduxStatusForm value={props.status} onSubmit={saveStatus} />}
            </div>
        </div>
    );
};

export default Status;

const StatusForm = (props) => {
    useEffect(() => {
        props.initialize({ statusEditMode: props.value ? props.value : "" });
    }, [])

    return (
        <form onSubmit={props.handleSubmit} className={styles.edit_mode_block}>
            <Field component={renderInput} name={"statusEditMode"} inputMaxLength={300} autoFocus={true} type="text" />
            <button className={styles.save_button}>Save</button>
        </form>
    );
};

const ReduxStatusForm = reduxForm({ form: "status" })(StatusForm);
