import styles from "./Input.module.scss";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLength, isRequiredNoError } from "../../../../utils/formValidation";
import { renderTextarea } from "../../../_common/Inputs/Inputs";

//validation
const maxLength500 = maxLength(500);

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={renderTextarea}
                name={"newPostTextarea"}
                placeholder="What's new?"
                type="text"
                validate={[isRequiredNoError, maxLength500]}
            />
            <button className={styles.button}>Publish</button>
        </form>
    );
};

export default reduxForm({ form: "newPost" })(NewPostForm);
