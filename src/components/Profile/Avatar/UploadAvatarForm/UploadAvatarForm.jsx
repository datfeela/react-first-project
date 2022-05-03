import { SvgSelector } from "../../../_common/SvgSelector/SvgSelector";
import styles from "./UploadAvatarForm.module.scss";


const UploadAvatarForm = ({savePhoto, deactivateEditMode}) => {
    const onPhotoChange = async (e) => {
        if (e.target.files.length) {
            let response = await savePhoto(e.target.files[0])
            response.resultCode === 0 && deactivateEditMode()
        }
    }

    return (
        <div>
            <h2 className={styles.title}>Upload a new photo</h2>
            <div>
                <input onChange={onPhotoChange} name="file-input" type="file" id="input__file" className={styles.input} />
                <label htmlFor="input__file" className={styles.button + " button"}>
                    <SvgSelector className={styles.icon} id="upload" />
                    <span className={styles.buttonText}>Select a file</span>
                </label>
            </div>
            <div className={styles.footer}>If you are having problems uploading, try choosing a smaller photo.</div>
        </div>
    );
};

export default UploadAvatarForm;
