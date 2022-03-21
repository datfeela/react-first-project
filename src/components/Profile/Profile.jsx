import styles from "./Profile.module.scss";
import Avatar from "./Avatar/Avatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import Preloader from "../_common/Preloader/Preloader";

const Profile = (props) => {
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
                    <ProfileInfo profileInfo={props.profile.profileInfo} />
                    <Posts
                        posts={props.profile.posts}
                        inputText={props.profile.inputText}
                        newPostInputChange={props.newPostInputChange}
                        addPost={props.addPost}
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;
