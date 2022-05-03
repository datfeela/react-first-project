import { useState } from "react";
import EditMode from "../../_common/EditMode/EditMode";
import { SvgSelector } from "../../_common/SvgSelector/SvgSelector";
import styles from "./Avatar.module.scss";
import UploadAvatarForm from "./UploadAvatarForm/UploadAvatarForm";
import { savePhoto } from "../../../redux/profilePageReducer";
import { connect } from "react-redux";

const Avatar = ({ photo, savePhoto, isOwner }) => {
    const [isEditModeActive, setIsEditModeActive] = useState(false);

    const activateEditMode = () => {
        setIsEditModeActive(true);
    };

    const deactivateEditMode = () => {
        setIsEditModeActive(false);
    };

    let wrapClassName = isOwner ? styles.wrap + ' ' + styles.wrap_editable : styles.wrap;

    return (
        <div>
            <div className={wrapClassName}>
                <img className={styles.avatar} src={photo ? photo : "https://via.placeholder.com/250x250"} alt="profileimg" />
                <div className={styles.popup}>
                    <div onClick={activateEditMode} className={styles.popup_action}>
                        <SvgSelector className={styles.popup_icon} id="upload" />
                        <span>Set new image</span>
                    </div>
                </div>
            </div>
            {isEditModeActive && <EditMode deactivateEditMode={deactivateEditMode} ChildComponent={UploadAvatarForm} savePhoto={savePhoto} />}
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
    };
};

let dispatchObj = {
    savePhoto
};

export default connect(mapStateToProps, dispatchObj)(Avatar);
