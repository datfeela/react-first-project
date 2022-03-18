import styles from "./Profile.module.scss";
import Avatar from "./Avatar/Avatar";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = (props) => {
    return (
        <div className={styles.wrap}>
            <img className={styles.banner} src="https://via.placeholder.com/1000x150?text=Banner" alt="theme" />
            <div className={styles.columns_wrap}>
                <div className={styles.column_side}>
                    <Avatar></Avatar>
                </div>
                <div className={styles.column_main}>
                    <ProfileInfoContainer/>
                    <PostsContainer/>
                </div>
            </div>
        </div>

        // <div className={styles.wrap}>
        //     <header className={styles.header}>
        //         <span className={styles.header__logo}>LOGO</span>
        //     </header>
        // </div>
    );
};

export default Profile;
