import styles from "./ProfileInfo.module.scss";
import Status from "./Status/Status";
import { isAnyValuesInObj } from "../../../utils/objectHelper";
import { useContext } from "react";
import { AppContext } from "../../../App";

const ProfileInfo = (props) => {
    const appContext = useContext(AppContext);

    return (
        <div className={appContext.currentTheme === "dark" ? styles.wrap + " wrap " + styles.wrap_dark : styles.wrap + ' wrap'}>
            <div className={styles.top}>
                <h1 className={styles.name}>{props.profileInfo.fullName}</h1>
                <Status
                    isOwner={props.isOwner}
                    userId={props.userId}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    requestInProgress={false}
                />
            </div>
            <div className={styles.headerWrap}>
                <h2 className={styles.header + " " + styles.header_lfaj}>
                    Looking for a job: {props.profileInfo.lookingForAJob ? <span> &#9989; </span> : <span> &#10060; </span>}
                </h2>
            </div>

            {props.profileInfo.lookingForAJobDescription && <div className={styles.personal_info}>{props.profileInfo.lookingForAJobDescription}</div>}
            {props.profileInfo.aboutMe && (
                <div>
                    <div className={styles.headerWrap}>
                        <h2 className={styles.header}>About Me</h2>
                        <span className={styles.headerLine}></span>
                    </div>
                    <div className={styles.personal_info}>{props.profileInfo.aboutMe}</div>
                </div>
            )}

            {isAnyValuesInObj(props.profileInfo.contacts) && (
                <div className={styles.headerWrap}>
                    <h2 className={styles.header}>Contacts:</h2>
                    <span className={styles.headerLine}></span>
                </div>
            )}
            <div>
                {props.profileInfo.contacts.vk && (
                    <div className={styles.row}>
                        <h3 className={styles.label}>vk:</h3>
                        <a href={addProtocol(props.profileInfo.contacts.vk)} className={styles.link_labeled}>
                            {props.profileInfo.contacts.vk}
                        </a>
                    </div>
                )}
                {props.profileInfo.contacts.facebook && (
                    <div className={styles.row}>
                        <h3 className={styles.label}>facebook:</h3>
                        <a href={addProtocol(props.profileInfo.contacts.facebook)} className={styles.link_labeled}>
                            {props.profileInfo.contacts.facebook}
                        </a>
                    </div>
                )}
                {props.profileInfo.contacts.twitter && (
                    <div className={styles.row}>
                        <h3 className={styles.label}>twitter:</h3>
                        <a href={addProtocol(props.profileInfo.contacts.twitter)} className={styles.link_labeled}>
                            {props.profileInfo.contacts.twitter}
                        </a>
                    </div>
                )}
                {props.profileInfo.contacts.instagram && (
                    <div className={styles.row}>
                        <h3 className={styles.label}>instagram:</h3>
                        <a href={addProtocol(props.profileInfo.contacts.instagram)} className={styles.link_labeled}>
                            {props.profileInfo.contacts.instagram}
                        </a>
                    </div>
                )}
                {props.profileInfo.contacts.youtube && (
                    <div className={styles.row}>
                        <h3 className={styles.label}>youtube:</h3>
                        <a href={addProtocol(props.profileInfo.contacts.youtube)} className={styles.link_labeled}>
                            {props.profileInfo.contacts.youtube}
                        </a>
                    </div>
                )}
                {props.profileInfo.contacts.github && (
                    <div className={styles.row}>
                        <h3 className={styles.label}>github:</h3>
                        <a href={addProtocol(props.profileInfo.contacts.github)} className={styles.link_labeled}>
                            {props.profileInfo.contacts.github}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

const addProtocol = (link) => {
    if (link.includes("http")) return link;
    else return `https://${link}`;
};

export default ProfileInfo;
