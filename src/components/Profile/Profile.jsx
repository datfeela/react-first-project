import styles from "./Profile.module.scss";
import Avatar from "./Avatar/Avatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import Preloader from "../_common/Preloader/Preloader";

import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import EditMode from "../_common/EditMode/EditMode";
import EditProfileForm from "./EditProfileForm/EditProfileForm";
import ProfileFriends from "./ProfileFriends/ProfileFriends";

const Profile = ({ isInit, profileInfo, changeProfileInfo, authUserId, isAuth, profileStatus, updateStatus, posts, addPost, ...props }) => {
    const params = useParams();
    const initializeProfile = (id) => {
        props.initializeProfile(id);
    };

    const currentUserId = params.userId ? params.userId : authUserId;
    const isOwner = params.userId == authUserId || !params.userId ? true : false;

    useEffect(() => {
        if (!profileInfo || profileInfo.userId !== currentUserId) {
            currentUserId && initializeProfile(currentUserId);
        }
    }, [currentUserId]);

    const [isEditModeActive, setIsEditModeActive] = useState(false);

    const activateEditMode = () => {
        setIsEditModeActive(true);
    };

    const deactivateEditMode = () => {
        setIsEditModeActive(false);
    };

    if (!currentUserId && !isAuth) {
        return <Navigate to={"../login"} />;
    }

    if (!isInit) {
        return (
            <div className={styles.preloaderWrap}>
                <Preloader />
            </div>
        );
    }

    if (isInit) {
        return (
            <div className={styles.wrap}>
                {isEditModeActive && (
                    <EditMode
                        ChildComponent={EditProfileForm}
                        authUserId={authUserId}
                        profileInfo={profileInfo}
                        changeProfileInfo={changeProfileInfo}
                        deactivateEditMode={deactivateEditMode}
                    />
                )}
                <div className={styles.columns_wrap}>
                    <div className={styles.column_side}>
                        <div className={styles.wrap_side + " wrap"}>
                            <Avatar isOwner={isOwner} photo={profileInfo.photos.large} />
                            {isOwner && (
                                <button className={styles.editModeButton + " button"} onClick={activateEditMode}>
                                    Edit profile info
                                </button>
                            )}
                            {!isOwner && <div>delete friend etc</div>}
                        </div>
                        {isOwner && (
                            <div className={styles.wrap_side + " wrap"}>
                                <ProfileFriends currentUserId={currentUserId} />
                            </div>
                        )}
                    </div>
                    <div className={styles.column_main}>
                        <ProfileInfo
                            userId={currentUserId}
                            profileInfo={profileInfo}
                            status={profileStatus}
                            updateStatus={updateStatus}
                            isOwner={isOwner}
                        />
                        <Posts posts={posts} addPost={addPost} currentUserId={currentUserId} />
                    </div>
                </div>
            </div>
        );
    }
};

export default Profile;
