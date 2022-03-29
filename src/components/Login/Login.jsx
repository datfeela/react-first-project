import { connect } from "react-redux";
import { logIn } from "../../redux/authReducer";
import styles from "./Login.module.scss";
import LoginForm from "./LoginForm/LoginForm";

const Login = (props) => {
    const handleSubmit = (formData) => {
        props.logIn(formData);
    };

    return (
        <div className={styles.wrap}>
            <h1>login</h1>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

let dispatchObj = {
    logIn,
};

export default connect(mapStateToProps, dispatchObj)(Login);
