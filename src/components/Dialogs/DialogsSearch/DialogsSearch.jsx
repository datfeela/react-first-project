import styles from "./DialogsSearch.module.scss";
import { Field, Form, Formik } from "formik";
import { RenderInputFormik } from "../../_common/Inputs/Inputs";
import { setDialogsSearchTerm } from "../../../redux/chatReducer";
import { selectDialogsSearchTerm } from "../../../redux/chatSelectors";
import { connect } from "react-redux";
import { useContext } from "react";
import { AppContext } from "../../../App";

const DialogsSearch = (props) => {
    const appContext = useContext(AppContext);

    const submit = (values, actions) => {
        actions.setSubmitting(false);
    };

    const setSearchTerm = (value) => {
        value !== props.searchTerm && props.setDialogsSearchTerm(value);
    };

    return (
        <div className={appContext.currentTheme === "dark" ? styles.wrap + " wrapNoPadding " + styles.wrap_dark : styles.wrap + " wrapNoPadding"}>
            <Formik initialValues={{ dialogsSearchInput: "" }} onSubmit={submit}>
                {() => (
                    <Form>
                        <Field
                            type="text"
                            name="dialogsSearchInput"
                            component={RenderInputFormik}
                            placeholder={"Search for dialogs..."}
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
        searchTerm: selectDialogsSearchTerm(state),
    };
};

let dispatchObj = {
    setDialogsSearchTerm,
};

export default connect(mapStateToProps, dispatchObj)(DialogsSearch);
