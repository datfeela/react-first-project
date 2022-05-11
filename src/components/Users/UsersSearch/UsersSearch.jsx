import styles from "./UsersSearch.module.scss";
import { Field, Form, Formik } from "formik";
import { RenderInputFormik } from "../../_common/Inputs/Inputs";
import { setSearchTerm } from "../../../redux/usersPageReducer";
import { connect } from "react-redux";
import { selectSearchTerm } from "../../../redux/usersPageSelectors";
import { useContext } from "react";
import { AppContext } from "../../../App";

const UsersSearch = (props) => {
    const appContext = useContext(AppContext);

    const submit = (values, actions) => {
        actions.setSubmitting(false);
    };

    const setSearchTerm = (value) => {
        value !== props.searchTerm && props.setSearchTerm(value);
    };

    return (
        <div className={appContext.currentTheme === "dark" ? styles.wrap + " wrapNoPadding  " + styles.wrap_dark : styles.wrap + " wrapNoPadding"}>
            <Formik initialValues={{ usersSearchInput: "" }} onSubmit={submit}>
                {() => (
                    <Form>
                        <Field
                            type="text"
                            name="usersSearchInput"
                            component={RenderInputFormik}
                            placeholder={"Search"}
                            onValueChange={setSearchTerm}
                            autoComplete='off'
                            options={{
                                border: "none",
                                icon: "search",
                                padding: "0px",
                            }}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        searchTerm: selectSearchTerm(state)
    };
};

let dispatchObj = {
    setSearchTerm,
};

export default connect(mapStateToProps, dispatchObj)(UsersSearch);
