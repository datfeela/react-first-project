import React, { useContext, useEffect, useState } from "react";
import styles from "./Status.module.scss";
import Preloader from "./../../../_common/Preloader/Preloader";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { RenderInput } from "../../../_common/Inputs/Inputs";
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

    const saveStatus = (formData) => {
        setIsEditMode(false);
        document.removeEventListener("mousedown", handleClick);
        props.updateStatus(formData.statusEditMode);
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
            {isEditMode && <ReduxStatusForm value={props.status} onSubmit={saveStatus} />}
        </div>
    );
};

export default Status;

const StatusForm = (props) => {
    useEffect(() => {
        props.initialize({ statusEditMode: props.value ? props.value : "" });
    }, []);

    return (
        <form onSubmit={props.handleSubmit} className={styles.edit_mode_block}>
            <Field component={RenderInput} name={"statusEditMode"} inputMaxLength={300} autoComplete={'off'} autoFocus={true} type="text" />
            <button className={styles.save_button + ' button'}>Save</button>
        </form>
    );
};

const ReduxStatusForm = reduxForm({ form: "status" })(StatusForm);
