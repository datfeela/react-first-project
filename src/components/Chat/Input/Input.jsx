import React from "react";
import styles from "./Input.module.scss";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { isRequiredNoError } from "../../../utils/formValidation";
import { renderTextarea } from "../../_common/Inputs/Inputs";

const Input = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.wrap + " wrap"}>
            <Field
                component={renderTextarea}
                name="newMessageText"
                type="text"
                className={styles.input}
                placeholder="Type a message..."
                validate={isRequiredNoError}
            />
            <button className={styles.button}>Send</button>
        </form>
    );
};

export default reduxForm({ form: "newMessage" })(Input);
