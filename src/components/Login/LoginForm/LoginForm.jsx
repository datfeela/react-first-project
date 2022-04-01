import { Field, reduxForm } from "redux-form";
import styles from "./LoginForm.module.scss";

import { isRequired, maxLength, minLength } from "../../../utils/formValidation";
import WarningWithPopup from "../../_common/WarningWithPopup/WarningWithPopup";

//validation
//!ЗАРЕФАКТОРИТЬ В ПЕРВУЮ ОЧЕРЕДЬ, ПОТОМ 77 ВИДОС 44:20
const maxLength20 = maxLength(20);
const minLength3 = minLength(3);

const renderInput = ({ input, type, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    const hasWarning = meta.touched && meta.warning;

    return (
        <div className={styles.inputWrap}>
            <input
                {...input}
                className={hasError || hasWarning ? props.className + " " + styles.input_error : props.className}
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

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="login"
                className={styles.input}
                placeholder="Login"
                component={renderInput}
                validate={[isRequired, maxLength20, minLength3]}
            />
            <Field name="password" className={styles.input} placeholder="Password" component={renderInput} validate={[isRequired]} />
            <div className={styles.checkboxWrap}>
                <Field name="rememberMe" className={styles.checkbox} type={"checkbox"} component={"input"} />
                <span className={styles.checkbox__text}>Remember me</span>
            </div>
            <button className={styles.button}>Log In</button>
        </form>
    );
};

export default reduxForm({ form: "login" })(LoginForm);
