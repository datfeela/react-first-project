import styles from "./EditProfileForm.module.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { isRequired, validateUrl } from "../../../utils/formValidation";
import { RenderTextareaFormik, RenderInputFormik } from "../../_common/Inputs/Inputs";
import WarningWithPopup from "../../_common/WarningWithPopup/WarningWithPopup";
import { useContext, useState } from "react";
import { SvgSelector } from "../../_common/SvgSelector/SvgSelector";
import { AppContext } from "../../../App";

const EditProfileForm = ({ authUserId, profileInfo, changeProfileInfo }) => {
    const [changesSubmitted, setChangesSubmitted] = useState(false);
    const appContext = useContext(AppContext);

    //validation
    const validatNameField = (value) => {
        let error = isRequired(value, appContext.currentLanguage);
        return error;
    };

    const validateContactField = (value) => {
        let error = validateUrl(value, appContext.currentLanguage);
        return error;
    };

    const submit = async (values, actions) => {
        let response = await changeProfileInfo(authUserId, values.fullName, values.aboutMe, values.lookingForAJob, values.lookingForAJobDescription, {
            github: values.github,
            vk: values.vk,
            facebook: values.facebook,
            instagram: values.instagram,
            twitter: values.twitter,
            website: values.website,
            youtube: values.youtube,
            mainLink: "",
        });
        actions.setSubmitting(false);
        response.resultCode === 0 && setChangesSubmitted(true);
    };

    return (
        <div className={appContext.currentTheme === "dark" ? styles.wrap + " " + styles.wrap_dark : styles.wrap}>
            <h2 className={styles.title}>
                {appContext.currentLanguage === "eng" && "Edit info"}
                {appContext.currentLanguage === "ru" && "Редактирование профиля"}
            </h2>
            {changesSubmitted && (
                <div className={styles.submitNotification}>
                    <SvgSelector className={styles.submitIcon} id="success" />
                    <span className={styles.submitText}>
                        {appContext.currentLanguage === "eng" && (
                            <span>
                                Your changes have been submited successfully. <br /> They will be displayed on your page.
                            </span>
                        )}
                        {appContext.currentLanguage === "ru" && (
                            <>
                                <span className={styles.submitTitle}>Изменения сохранены. </span> <br />
                                <span> Новые данные будут отражены на вашей странице.</span>
                            </>
                        )}
                    </span>
                </div>
            )}
            <Formik
                initialValues={{
                    fullName: profileInfo.fullName,
                    lookingForAJob: profileInfo.lookingForAJob,
                    lookingForAJobDescription: profileInfo.lookingForAJobDescription,
                    aboutMe: profileInfo.aboutMe || "",
                    github: profileInfo.contacts.github || "",
                    vk: profileInfo.contacts.vk || "",
                    facebook: profileInfo.contacts.facebook || "",
                    instagram: profileInfo.contacts.instagram || "",
                    twitter: profileInfo.contacts.twitter || "",
                    website: profileInfo.contacts.website || "",
                    youtube: profileInfo.contacts.youtube || "",
                }}
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className={styles.inputGroup}>
                            <h3 className={styles.subtitle}>
                                {appContext.currentLanguage === "eng" && "About you"}
                                {appContext.currentLanguage === "ru" && "Основное"}
                            </h3>
                            <div className={styles.inputWrap}>
                                <span className={styles.label}>
                                    {appContext.currentLanguage === "eng" && "Full name:"}
                                    {appContext.currentLanguage === "ru" && "Полное имя:"}
                                </span>
                                <Field
                                    type="text"
                                    name="fullName"
                                    component={RenderInputFormik}
                                    validate={validatNameField}
                                    options={{
                                        padding: "5px 12px",
                                        showErrors: true,
                                    }}
                                />
                                <div className={styles.errorWrapAbsolute}>
                                    <ErrorMessage name="fullName" component={WarningWithPopup} />
                                </div>
                            </div>
                            <div className={styles.inputWrap}>
                                <span className={styles.label}>
                                    {appContext.currentLanguage === "eng" && "Looking for a job:"}
                                    {appContext.currentLanguage === "ru" && "В поисках работы:"}
                                </span>
                                <Field type="checkbox" name="lookingForAJob" component={RenderInputFormik} />
                                {/* label={"looking for a job"} */}
                            </div>
                            <div className={styles.inputWrap}>
                                <span className={styles.label}>
                                    {appContext.currentLanguage === "eng" && (
                                        <span>
                                            Looking for a job <br /> description:
                                        </span>
                                    )}
                                    {appContext.currentLanguage === "ru" && (
                                        <span>
                                            В поисках работы <br /> описание:
                                        </span>
                                    )}
                                </span>
                                <Field
                                    type="text"
                                    name="lookingForAJobDescription"
                                    component={RenderTextareaFormik}
                                    defaultHeight={40}
                                    maxHeight={"120px"}
                                />
                                <ErrorMessage name="lookingForAJobDescription" component={ErrorComponent} />
                            </div>
                            <div className={styles.inputWrap}>
                                <span className={styles.label}>
                                    {appContext.currentLanguage === "eng" && "About you:"}
                                    {appContext.currentLanguage === "ru" && "О себе"}
                                </span>
                                <Field type="text" name="aboutMe" component={RenderTextareaFormik} defaultHeight={40} maxHeight={"120px"} />
                                <ErrorMessage name="aboutMe" component={ErrorComponent} />
                            </div>
                        </div>
                        <div className={styles.inputGroup}>
                            <h3 className={styles.subtitle}>
                                {appContext.currentLanguage === "eng" && "Your contacts:"}
                                {appContext.currentLanguage === "ru" && "Контакты:"}
                            </h3>
                            <div className={styles.inputWrap}>
                                <span className={styles.label}>GitHub: </span>
                                <Field
                                    type="text"
                                    name="github"
                                    component={RenderInputFormik}
                                    validate={validateContactField}
                                    options={{
                                        padding: "5px 12px",
                                        showErrors: true,
                                    }}
                                />
                                <div className={styles.errorWrapAbsolute}>
                                    <ErrorMessage name="github" component={WarningWithPopup} />
                                </div>
                            </div>
                            <div className={styles.inputWrap}>
                                <span className={styles.label}>VK: </span>
                                <Field
                                    type="text"
                                    name="vk"
                                    component={RenderInputFormik}
                                    validate={validateContactField}
                                    options={{
                                        padding: "5px 12px",
                                        showErrors: true,
                                    }}
                                />
                                <div className={styles.errorWrapAbsolute}>
                                    <ErrorMessage name="vk" component={WarningWithPopup} />
                                </div>
                            </div>
                            <div className={styles.inputWrap}>
                                <span className={styles.label}>Facebook: </span>
                                <Field
                                    type="text"
                                    name="facebook"
                                    component={RenderInputFormik}
                                    validate={validateContactField}
                                    options={{
                                        padding: "5px 12px",
                                        showErrors: true,
                                    }}
                                />
                                <div className={styles.errorWrapAbsolute}>
                                    <ErrorMessage name="facebook" component={WarningWithPopup} />
                                </div>
                            </div>
                            <div className={styles.inputWrap}>
                                <span className={styles.label}>Instagram: </span>
                                <Field
                                    type="text"
                                    name="instagram"
                                    component={RenderInputFormik}
                                    validate={validateContactField}
                                    options={{
                                        padding: "5px 12px",
                                        showErrors: true,
                                    }}
                                />
                                <div className={styles.errorWrapAbsolute}>
                                    <ErrorMessage name="instagram" component={WarningWithPopup} />
                                </div>
                            </div>
                            <div className={styles.inputWrap}>
                                <span className={styles.label}>Twitter: </span>
                                <Field
                                    type="text"
                                    name="twitter"
                                    component={RenderInputFormik}
                                    validate={validateContactField}
                                    options={{
                                        padding: "5px 12px",
                                        showErrors: true,
                                    }}
                                />
                                <div className={styles.errorWrapAbsolute}>
                                    <ErrorMessage name="twitter" component={WarningWithPopup} />
                                </div>
                            </div>
                            <div className={styles.inputWrap}>
                                <span className={styles.label}>
                                    {appContext.currentLanguage === "eng" && "Your website:"}
                                    {appContext.currentLanguage === "ru" && "Свой сайт:"}
                                </span>
                                <Field
                                    type="text"
                                    name="website"
                                    component={RenderInputFormik}
                                    validate={validateContactField}
                                    options={{
                                        padding: "5px 12px",
                                        showErrors: true,
                                    }}
                                />
                                <div className={styles.errorWrapAbsolute}>
                                    <ErrorMessage name="website" component={WarningWithPopup} />
                                </div>
                            </div>
                            <div className={styles.inputWrap}>
                                <span className={styles.label}>
                                    {appContext.currentLanguage === "eng" && "Youtube channel:"}
                                    {appContext.currentLanguage === "ru" && "Youtube канал:"}
                                </span>
                                <Field
                                    type="text"
                                    name="youtube"
                                    component={RenderInputFormik}
                                    validate={validateContactField}
                                    options={{
                                        padding: "5px 12px",
                                        showErrors: true,
                                    }}
                                />
                                <div className={styles.errorWrapAbsolute}>
                                    <ErrorMessage name="youtube" component={WarningWithPopup} />
                                </div>
                            </div>
                        </div>
                        <button
                            className={
                                // Object.keys(errors).length
                                // ? styles.submitButton + " " + styles.submitButton_disabled + " button" :
                                styles.submitButton + " button"
                            }
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {appContext.currentLanguage === "eng" && "Submit"}
                            {appContext.currentLanguage === "ru" && "Сохранить"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default EditProfileForm;

const ErrorComponent = (props) => {
    return <div>{props.children}</div>;
};
