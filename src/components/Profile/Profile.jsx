import styles from "./Profile.module.scss";
import Avatar from "./Avatar/Avatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import Preloader from "../_common/Preloader/Preloader";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = (props) => {
    //      !react router hooks testing
    const params = useParams();

    const getProfileInfo = () => {
        props.getProfileInfo(params.userId);
    };

    // useEffect(() => {
    //     if (!props.profile.profileInfo) {
    //         getProfileInfo();
    //     }
    // });

    useEffect(() => {
        if (!props.profile.profileInfo || props.profile.profileInfo.userId !== params.userId) getProfileInfo();
    }, []);

    //      !-------------------------//

    if (!props.profile.profileInfo) {
        return (
            <div className={styles.preloaderWrap}>
                <Preloader />
            </div>
        );
    }
    return (
        <div className={styles.wrap}>
            {/* <img className={styles.banner} src="https://via.placeholder.com/1000x150?text=Banner" alt="theme" /> */}
            <div className={styles.columns_wrap}>
                <div className={styles.column_side}>
                    <Avatar photo={props.profile.profileInfo.photos.large} />
                </div>
                <div className={styles.column_main}>
                    <ProfileInfo
                        userId={params.userId}
                        profileInfo={props.profile.profileInfo}
                        status={props.profile.profileStatus}
                        getStatus={props.getStatus}
                        updateStatus={props.updateStatus}
                    />
                    <Posts
                        posts={props.profile.posts}
                        inputText={props.profile.inputText}
                        addPost={props.addPost}
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;
