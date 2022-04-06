import { Field, reduxForm } from "redux-form";
import styles from "./LoginForm.module.scss";

import { isRequired, maxLength, minLength } from "../../../utils/formValidation";
import { renderCheckbox, renderInput } from "../../_common/Inputs/Inputs";

//!ЗАРЕФАКТОРИТЬ В ПЕРВУЮ ОЧЕРЕДЬ, ПОТОМ 77 ВИДОС 44:20
//validation

const maxLength20 = maxLength(20);
const minLength3 = minLength(3);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="login"
                placeholder="Login"
                component={renderInput}
                validate={[isRequired, maxLength20, minLength3]}
                inputType={"loginInput"}
            />
            <Field
                name="password"
                placeholder="Password"
                component={renderInput}
                validate={[isRequired]}
                type={"password"}
                inputType={"loginInput"}
            />
            <Field name="rememberMe" component={renderCheckbox} text="Remember me" />
            {props.generalError && <div className={styles.generalError}>{props.generalError}</div>}
            <button className={styles.button}>Log In</button>
        </form>
    );
};

export default reduxForm({ form: "login" })(LoginForm);
