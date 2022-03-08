import styles from "./ProfileInfo.module.scss";

const ProfileInfo = (props) => {

    return (
        <div className={styles.wrap + " wrap"}>
            <h1 className={styles.name}>{ props.name}</h1>
            <div className={styles.row}>
                <h3 className={styles.label}>Date of birth</h3>
                <span className={styles.birthdate_labeled}>{props.birth }</span>
            </div>
            <div className={styles.row}>
                <h3 className={styles.label}>Education</h3>
                <span className={styles.education_labeled}>{props.edu}</span>
            </div>
            <h2 className={styles.header}>Personal info</h2>
            <div className={styles.personal_info}>{props.persInfo}</div>
        </div>
    );
};

export default ProfileInfo;
