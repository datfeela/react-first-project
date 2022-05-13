import { useContext, useEffect } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../App";
import { logIn } from "../../redux/authReducer";
import { selectGeneralError, selectIsAuth } from "../../redux/authSelectors";
import styles from "./Login.module.scss";
import LoginForm from "./LoginForm/LoginForm";

const Login = (props) => {
    const appContext = useContext(AppContext);
    useEffect(() => {
        document.title = appContext.currentLanguage === "eng" ? "Login | Feelanet" : appContext.currentLanguage === "ru" && "Авторизация | Feelanet";
    }, []);

    // const handleSubmit = (formData) => {
    //     props.logIn(formData);
    // };

    if (props.isAuth) {
        return <Navigate to={"../profile"} />;
    }

    return (
        <div className={appContext.currentTheme === "dark" ? styles.wrap + " " + styles.wrap_dark : styles.wrap}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {appContext.currentLanguage === "eng" && "Log In"} {appContext.currentLanguage === "ru" && "Вход"}
                </h1>
                <LoginForm logIn={props.logIn} generalError={props.generalError} />
            </div>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        isAuth: selectIsAuth(state),
        generalError: selectGeneralError(state),
    };
};

let dispatchObj = {
    logIn,
};

export default connect(mapStateToProps, dispatchObj)(Login);
