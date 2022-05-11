import { Field, reduxForm } from "redux-form";
import styles from "./LoginForm.module.scss";

import { isRequired, maxLength, minLength } from "../../../utils/formValidation";
import { renderCheckbox, RenderInput } from "../../_common/Inputs/Inputs";

//!ЗАРЕФАКТОРИТЬ
//validation

const maxLength20 = maxLength(20);
const minLength3 = minLength(3);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="login"
                placeholder="Login"
                component={RenderInput}
                validate={[isRequired, maxLength20, minLength3]}
                inputType={"loginInput"}
            />
            <Field
                name="password"
                autoComplete="current-password"
                placeholder="Password"
                component={RenderInput}
                validate={[isRequired]}
                type={"password"}
                inputType={"loginInput"}
            />
            <Field name="rememberMe" component={renderCheckbox} text="Remember me" />
            {props.generalError && <div className={styles.generalError}>{props.generalError}</div>}
            <button className={styles.button + " button"}>Log In</button>
        </form>
    );
};

export default reduxForm({ form: "login" })(LoginForm);
