
import styles from "./Input.module.scss";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import {maxLength } from "../../../../utils/formValidation";

//validation
const maxLength500 = maxLength(500);
const isRequired = (value) => {
    return value ? undefined : " ";
};

const renderField = ({ input, type, meta, ...props }) => {
    return (
        <div>
            <textarea {...input} className={props.className} placeholder={props.placeholder} type={type} />
            {meta.touched &&
                ((meta.error && <span className={styles.error}>{meta.error}</span>) ||
                    (meta.warning && <span className={styles.warning}>{meta.warning}</span>))}
        </div>
    );
};

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={renderField}
                name={"newPostTextarea"}
                className={styles.input}
                placeholder="What's new?"
                type="text"
                validate={[isRequired, maxLength500]}
            />
            <button className={styles.button}>Publish</button>
        </form>
    );
};

export default reduxForm({ form: "newPost" })(NewPostForm);
