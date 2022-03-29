import React from "react";
import styles from "./Status.module.scss";
import Preloader from "./../../../_common/Preloader/Preloader";

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    editModeBlock = React.createRef();
    input = React.createRef();

    componentDidMount = () => {
        this.props.getStatus(this.props.userId);
    };

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    };

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
            status: this.props.status,
        });
        document.removeEventListener("mousedown", this.handleClick);
    };

    saveStatus = () => {
        this.setState({
            editMode: false,
            status: this.input.current.value,
        });
        document.removeEventListener("mousedown", this.handleClick);
        this.props.updateStatus(this.input.current.value);
    };

    handleClick = (e) => {
        if (!this.editModeBlock.current.contains(e.target)) {
            this.deactivateEditMode();
        }
    };

    handleInputChange = (e) => {
        let text = e.target.value;
        this.setState({
            status: text,
        });
    };

    render() {
        return (
            <div className={styles.wrap}>
                {!this.props.status && <span onClick={this.activateEditMode}>no status</span>}
                {this.props.status && (
                    <span onClick={this.activateEditMode} className={styles.text}>
                        {this.props.status}
                    </span>
                )}
                {this.props.requestInProgress && <Preloader />}
                {this.state.editMode && (
                    <div ref={this.editModeBlock} className={styles.edit_mode_block}>
                        <input
                            ref={this.input}
                            onChange={this.handleInputChange}
                            className={styles.input}
                            autoFocus={true}
                            value={this.state.status ? this.state.status : ""}
                            type="text"
                        />
                        <button onClick={this.saveStatus} className={styles.save_button}>
                            Save
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default Status;
