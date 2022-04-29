import { useRef, useState } from "react";
import styles from "./EditMode.module.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { isRequired } from "../../../utils/formValidation";
import { RenderTextareaFormik, RenderInputFormik } from "../../_common/Inputs/Inputs";
import { SvgSelector } from "../../_common/SvgSelector/SvgSelector";
import WarningWithPopup from "../../_common/WarningWithPopup/WarningWithPopup";

const EditMode = ({ deactivateEditMode, authUserId, profileInfo, changeProfileInfo }) => {
    const innerWrapRef = useRef();

    const handleClick = (e) => {
        !innerWrapRef.current.contains(e.target) && deactivateEditMode();
    };

    //validation
    const validatNameField = (value) => {
        let error = isRequired(value);
        return error;
    };

    const submit = (values, actions) => {
        console.log(authUserId, values);
        changeProfileInfo(authUserId, values.fullName, values.lookingForAJob, values.about, {
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
    };

    return (
        <div onClick={handleClick} className={styles.wrap}>
            <div ref={innerWrapRef} className={styles.wrapInner + " wrap"}>
                <SvgSelector id="close" className={styles.closeButton} />
                <h2 className={styles.title}>Edit info</h2>
                <Formik
                    initialValues={{
                        fullName: profileInfo.fullName,
                        lookingForAJob: profileInfo.lookingForAJob,
                        about: profileInfo.lookingForAJobDescription || "",
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
                                <h3 className={styles.subtitle}>About you</h3>
                                <div className={styles.inputWrap}>
                                    <span className={styles.label}>Full name: </span>
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
                                    <span className={styles.label}>About you: </span>
                                    <Field type="text" name="about" component={RenderTextareaFormik} defaultHeight={40} maxHeight={"240px"} />
                                    <ErrorMessage name="about" component={ErrorComponent} />
                                </div>
                                <div className={styles.inputWrap}>
                                    <span className={styles.label}>Looking for a job: </span>
                                    <Field type="checkbox" name="lookingForAJob" component={RenderInputFormik} />
                                    {/* label={"looking for a job"} */}
                                </div>
                            </div>
                            <div className={styles.inputGroup}>
                                <h3 className={styles.subtitle}>Your contacts</h3>
                                <div className={styles.inputWrap}>
                                    <span className={styles.label}>GitHub: </span>
                                    <Field
                                        type="text"
                                        name="github"
                                        component={RenderInputFormik}
                                        options={{
                                            padding: "5px 12px",
                                        }}
                                    />
                                </div>
                                <div className={styles.inputWrap}>
                                    <span className={styles.label}>VK: </span>
                                    <Field
                                        type="text"
                                        name="vk"
                                        component={RenderInputFormik}
                                        options={{
                                            padding: "5px 12px",
                                        }}
                                    />
                                </div>
                                <div className={styles.inputWrap}>
                                    <span className={styles.label}>Facebook: </span>
                                    <Field
                                        type="text"
                                        name="facebook"
                                        component={RenderInputFormik}
                                        options={{
                                            padding: "5px 12px",
                                        }}
                                    />
                                </div>
                                <div className={styles.inputWrap}>
                                    <span className={styles.label}>Instagram: </span>
                                    <Field
                                        type="text"
                                        name="instagram"
                                        component={RenderInputFormik}
                                        options={{
                                            padding: "5px 12px",
                                        }}
                                    />
                                </div>
                                <div className={styles.inputWrap}>
                                    <span className={styles.label}>Twitter: </span>
                                    <Field
                                        type="text"
                                        name="twitter"
                                        component={RenderInputFormik}
                                        options={{
                                            padding: "5px 12px",
                                        }}
                                    />
                                </div>
                                <div className={styles.inputWrap}>
                                    <span className={styles.label}>Your website: </span>
                                    <Field
                                        type="text"
                                        name="website"
                                        component={RenderInputFormik}
                                        options={{
                                            padding: "5px 12px",
                                        }}
                                    />
                                </div>
                                <div className={styles.inputWrap}>
                                    <span className={styles.label}>Youtube channel: </span>
                                    <Field
                                        type="text"
                                        name="youtube"
                                        component={RenderInputFormik}
                                        options={{
                                            padding: "5px 12px",
                                        }}
                                    />
                                </div>
                            </div>
                            <button className={styles.submitButton + " button"} type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default EditMode;

const ErrorComponent = (props) => {
    return <div>{props.children}</div>;
};
