import styles from "./LoginForm.module.scss";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { isRequired, maxLength, minLength } from "../../../utils/formValidation";
import { RenderInputFormik } from "../../_common/Inputs/Inputs";
import { useContext } from "react";
import { AppContext } from "../../../App";
import WarningWithPopup from "../../_common/WarningWithPopup/WarningWithPopup";

const LoginForm = (props) => {
    const appContext = useContext(AppContext);

    //validation
    const validateLogin = (value) => {
        let error = isRequired(value, appContext.currentLanguage);
        if (!error) error = minLength(value, 3, appContext.currentLanguage);
        if (!error) error = maxLength(value, 20, appContext.currentLanguage);
        return error;
    };

    const validatePassword = (value) => {
        let error = isRequired(value, appContext.currentLanguage);
        return error;
    };

    const submit = (values, actions) => {
        props.logIn(values);
        actions.setSubmitting(false);
    };

    return (
        <div className={appContext.currentTheme === "dark" ? styles.wrap + " " + styles.wrap_dark : styles.wrap}>
            <Formik initialValues={{ login: "", password: "", rememberMe: false }} onSubmit={submit}>
                {({ isSubmitting }) => (
                    <Form>
                        <div className={styles.inputWrap}>
                            <Field
                                type="text"
                                name="login"
                                component={RenderInputFormik}
                                validate={validateLogin}
                                placeholder={appContext.currentLanguage === "eng" ? "Login" : appContext.currentLanguage === "ru" && "Логин"}
                                options={{
                                    padding: "10px 45px 10px 20px",
                                    showErrors: true,
                                }}
                            />
                            <div className={styles.errorWrapAbsolute}>
                                <ErrorMessage name="login" component={WarningWithPopup} />
                            </div>
                        </div>
                        <div className={styles.inputWrap}>
                            <Field
                                type="password"
                                name="password"
                                component={RenderInputFormik}
                                validate={validatePassword}
                                placeholder={appContext.currentLanguage === "eng" ? "Password" : appContext.currentLanguage === "ru" && "Пароль"}
                                options={{
                                    padding: "10px 45px 10px 20px",
                                    showErrors: true,
                                }}
                            />
                            <div className={styles.errorWrapAbsolute}>
                                <ErrorMessage name="password" component={WarningWithPopup} />
                            </div>
                        </div>
                        <div className={styles.checkboxWrap}>
                            <Field
                                type="checkbox"
                                name="rememberMe"
                                component={RenderInputFormik}
                                label={appContext.currentLanguage === "eng" ? "Remember me" : appContext.currentLanguage === "ru" && "Запомнить меня"}
                            />
                        </div>
                        {props.generalError && <div className={styles.generalError}>{props.generalError}</div>}
                        <button className={styles.button + " button"} type="submit" disabled={isSubmitting}>
                            {appContext.currentLanguage === "eng" && "Log In"} {appContext.currentLanguage === "ru" && "Войти"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;