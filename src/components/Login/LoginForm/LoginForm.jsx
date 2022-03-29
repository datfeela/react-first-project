import { Field, reduxForm } from "redux-form";
import styles from "./LoginForm.module.scss";

const LoginForm = (props) => {
    // debugger;
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="login" placeholder="Login" component={"input"} />
            <Field name="password" placeholder="Password" component={"input"} />
            <div>
                <Field name="rememberMe" className={styles.checkbox} type={"checkbox"} component={"input"} />
                <span>remember me</span>
            </div>
            <button>log in</button>
        </form>
    );
};

export default reduxForm({ form: "login" })(LoginForm);
