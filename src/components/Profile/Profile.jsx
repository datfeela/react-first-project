import styles from "./Profile.module.scss";
import Avatar from "./Avatar/Avatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    let profileInfo = props.state.users[0];

    return (
        <div className={styles.wrap}>
            <img className={styles.banner} src="https://via.placeholder.com/1000x150?text=Banner" alt="theme" />
            <div className={styles.columns_wrap}>
                <div className={styles.column_side}>
                    <Avatar></Avatar>
                </div>
                <div className={styles.column_main}>
                    <ProfileInfo
                        name={profileInfo.name}
                        birth={profileInfo.birth}
                        edu={profileInfo.education}
                        persInfo={profileInfo.persInfo}
                    ></ProfileInfo>
                    <Posts posts={props.state.posts} addPost={props.addPost}></Posts>
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
