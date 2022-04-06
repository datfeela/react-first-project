import styles from "./ProfileInfo.module.scss";
import Status from "./Status/Status";

const ProfileInfo = (props) => {
    return (
        <div className={styles.wrap + " wrap"}>
            <div className={styles.top}>
                <h1 className={styles.name}>{props.profileInfo.fullName}</h1>
                <Status userId={props.userId} status={props.status} updateStatus={props.updateStatus} requestInProgress={false} />
            </div>
            <div className={styles.row}>
                <h3 className={styles.label}>Looking for a Job:</h3>
                <span className={styles.birthdate_labeled}>{props.profileInfo.lookingForAJob ? "yes" : "no"}</span> {/*!!CLASSNAME*/}
            </div>
            <div className={styles.row}>
                <h3 className={styles.label}>LFAJ Desc:</h3>
                <span className={styles.birthdate_labeled}>{props.profileInfo.lookingForAJobDescription}</span> {/*!!CLASSNAME*/}
            </div>
            <h2 className={styles.header}>About Me</h2>
            <div className={styles.personal_info}>{props.profileInfo.aboutMe}</div>

            <h2 className={styles.header}>Contacts:</h2>
            <div className={styles.personal_info}>
                vk: {props.profileInfo.contacts.vk} <br />
                facebook: {props.profileInfo.contacts.facebook} <br />
                twitter: {props.profileInfo.contacts.twitter} <br />
                instagram: {props.profileInfo.contacts.instagram} <br />
                youtube: {props.profileInfo.contacts.youtube} <br />
                github: {props.profileInfo.contacts.github} <br />
                mainLink: {props.profileInfo.contacts.mainLink} <br />
            </div>
        </div>
    );
};

export default ProfileInfo;
