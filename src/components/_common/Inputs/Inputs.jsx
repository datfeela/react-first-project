import WarningWithPopup from "../WarningWithPopup/WarningWithPopup";
import styles from "./Inputs.module.scss";

export const renderInput = ({ input, type, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    const hasWarning = meta.touched && meta.warning;

    //max length check
    props.inputMaxLength && input.value.length > props.inputMaxLength && (input.value = input.value.substr(0, props.inputMaxLength));

    const InputClassSwitch = (inputType) => {
        switch (inputType) {
            case "loginInput":
                return styles.input + " " + styles.input_login;
            default:
                return styles.input;
        }
    };

    const inputClassName = InputClassSwitch(props.inputType);

    return (
        <div className={styles.inputWrap}>
            <input
                {...input}
                className={hasError || hasWarning ? inputClassName + " " + styles.input_error : inputClassName}
                placeholder={props.placeholder}
                type={type}
            />
            {hasError && (
                <div className={styles.warningWrap}>
                    <WarningWithPopup error={meta.error} />
                </div>
            )}
            {hasWarning && (
                <div className={styles.warningWrap}>
                    <WarningWithPopup error={meta.warning} />
                </div>
            )}
        </div>
    );
};

export const renderTextarea = ({ input, type, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    const hasWarning = meta.touched && meta.warning;

    //max length check
    props.inputMaxLength && input.value.length > props.inputMaxLength && (input.value = input.value.substr(0, props.inputMaxLength));

    const InputClassSwitch = (inputType) => {
        switch (inputType) {
            // case "loginInput":
            //     return styles.input + " " + styles.input_login;
            default:
                return styles.textarea;
        }
    };

    const inputClassName = InputClassSwitch(props.inputType);

    return (
        <div className={styles.inputWrap}>
            <textarea
                {...input}
                className={hasError || hasWarning ? inputClassName + " " + styles.textarea_error : inputClassName}
                placeholder={props.placeholder}
                type={type}
            />
            {!props.withoutWarning && hasError && <span className={styles.textareaError}>{meta.error}</span>}
            {!props.withoutWarning && hasWarning && <span className={styles.textareaWarning}>{meta.warning}</span>}
        </div>
    );
};

export const renderCheckbox = ({ input, type, meta, ...props }) => {
    return (
        <div className={styles.checkboxWrap}>
            <input {...input} name="rememberMe" className={styles.checkbox} type={"checkbox"} />
            <span className={styles.checkbox__text}>{props.text}</span>
        </div>
    );
};
