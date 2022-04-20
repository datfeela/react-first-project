import styles from "./UsersSearch.module.scss";
import { Field, Form, Formik } from "formik";
import { RenderInputFormik } from "../../_common/Inputs/Inputs";
import { setSearchTerm } from "../../../redux/usersPageReducer";
import { connect } from "react-redux";

const UsersSearch = (props) => {
    const submit = (values, actions) => {
        actions.setSubmitting(false);
    };

    const setSearchTerm = (value) => {
        props.setSearchTerm(value);
    };

    return (
        <div className={styles.wrap + " wrapNoPadding"}>
            <Formik initialValues={{ usersSearchInput: "" }} onSubmit={submit}>
                {() => (
                    <Form>
                        <Field
                            type="text"
                            name="usersSearchInput"
                            component={RenderInputFormik}
                            placeholder={"Search"}
                            onValueChange={setSearchTerm}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {};
};

let dispatchObj = {
    setSearchTerm,
};

export default connect(mapStateToProps, dispatchObj)(UsersSearch);
