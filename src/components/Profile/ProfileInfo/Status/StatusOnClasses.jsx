import React from "react";
import styles from "./Status.module.scss";
import Preloader from "./../../../_common/Preloader/Preloader";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { renderInput } from "../../../_common/Inputs/Inputs";

class Status extends React.Component {
    state = {
        editMode: false,
    };

    statusBlockRef = React.createRef();

    activateEditMode = () => {
        if (!this.props.requestInProgress) {
            this.setState({
                editMode: true,
            });
            document.addEventListener("mousedown", this.handleClick);
        }
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        document.removeEventListener("mousedown", this.handleClick);
    };

    saveStatus = (formData) => {
        this.setState({
            editMode: false,
        });
        document.removeEventListener("mousedown", this.handleClick);
        this.props.updateStatus(formData.statusEditMode);
    };

    handleClick = (e) => {
        if (!this.statusBlockRef.current.contains(e.target)) {
            this.deactivateEditMode();
        }
    };

    render() {
        return (
            <div ref={this.statusBlockRef} className={styles.wrap}>
                <span onClick={this.activateEditMode} className={styles.text}>
                    {this.props.status ? this.props.status : "no status"}
                </span>
                {this.props.requestInProgress && <Preloader />}
                {this.state.editMode && <ReduxStatusForm value={this.props.status} onSubmit={this.saveStatus} />}
            </div>
        );
    }
}

export default Status;

class StatusForm extends React.Component {
    componentDidMount = () => {
        this.props.initialize({ statusEditMode: this.props.value ? this.props.value : "" });
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className={styles.edit_mode_block}>
                <Field
                    component={renderInput}
                    name={"statusEditMode"}
                    inputMaxLength={300}
                    autoFocus={true}
                    type="text"
                />
                <button className={styles.save_button}>Save</button>
            </form>
        );
    }
}

const ReduxStatusForm = reduxForm({ form: "status" })(StatusForm);

