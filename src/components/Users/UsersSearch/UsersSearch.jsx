import styles from "./UsersSearch.module.scss";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { RenderInputFormik } from "../../_common/Inputs/Inputs";
import { setSearchTerm } from "../../../redux/usersPageReducer";
import { connect } from "react-redux";
import { useEffect } from "react";

const UsersSearch = (props) => {
    const submit = (values, actions) => {
        actions.setSubmitting(false);
    };

    const setSearchTerm = (value) => {
        props.setSearchTerm(value);
    };

    //! useEffect(() => {
    //!     return () => {
    //!         setSearchTerm("");
    //!     };
    //! }, []);
    //!better to initialize

    return (
        <div className={styles.wrap + " wrapNoPadding"}>
            <Formik initialValues={{ usersSearchInput: "" }} onSubmit={submit}>
                {() => (
                    <Form>
                        <Field
                            type="text"
                            name="usersSearchInput"
                            component={RenderInputFormik}
                            placeholder={"blabla"}
                            returnValueOnChange={setSearchTerm}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

// export default UsersSearch;

let mapStateToProps = (state) => {
    return {};
};

let dispatchObj = {
    setSearchTerm,
};

export default connect(mapStateToProps, dispatchObj)(UsersSearch);
