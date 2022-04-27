import styles from "./DialogsSearch.module.scss";
import { Field, Form, Formik } from "formik";
import { RenderInputFormik } from "../../_common/Inputs/Inputs";
import { setDialogsSearchTerm } from "../../../redux/chatReducer";
import { selectDialogsSearchTerm } from "../../../redux/chatSelectors";
import { connect } from "react-redux";

const DialogsSearch = (props) => {
    const submit = (values, actions) => {
        actions.setSubmitting(false);
    };

    const setSearchTerm = (value) => {
        value !== props.searchTerm && props.setDialogsSearchTerm(value);
    };

    return (
        <div className={styles.wrap + " wrapNoPadding"}>
            <Formik initialValues={{ dialogsSearchInput: "" }} onSubmit={submit}>
                {() => (
                    <Form>
                        <Field
                            type="text"
                            name="dialogsSearchInput"
                            component={RenderInputFormik}
                            placeholder={"Search for dialogs..."}
                            onValueChange={setSearchTerm}
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
    setDialogsSearchTerm
};

export default connect(mapStateToProps, dispatchObj)(DialogsSearch);
