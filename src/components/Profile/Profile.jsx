import styles from "./Profile.module.scss";
import Avatar from "./Avatar/Avatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import Preloader from "../_common/Preloader/Preloader";

import { useEffect } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";

const Profile = (props) => {
    //      !react router hooks testing
    const params = useParams();

    const initializeProfile = (id) => {
        props.initializeProfile(id);
    };

    let currentUserId = params.userId ? params.userId : props.authUserId;

    useEffect(() => {
        if (!props.profile.profileInfo || props.profile.profileInfo.userId !== currentUserId) {
            currentUserId && initializeProfile(currentUserId);
        } 
    }, []);

    //      !-------------------------//

    if (!currentUserId && !props.isAuth) {
        return (
            <Navigate to={'../login'}/>
        )
    }

    if (!props.profile.profileInfo) {
        return (
            <div className={styles.preloaderWrap}>
                <Preloader />
            </div>
        );
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.columns_wrap}>
                <div className={styles.column_side}>
                    <Avatar photo={props.profile.profileInfo.photos.large} />
                </div>
                <div className={styles.column_main}>
                    <ProfileInfo
                        userId={currentUserId}
                        profileInfo={props.profile.profileInfo}
                        status={props.profile.profileStatus} 
                        updateStatus={props.updateStatus}
                    />
                    <Posts posts={props.profile.posts} inputText={props.profile.inputText} addPost={props.addPost} />
                </div>
            </div>
        </div>
    );
};

export default Profile;
