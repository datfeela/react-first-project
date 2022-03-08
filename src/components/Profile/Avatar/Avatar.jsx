import styles from "./Avatar.module.scss";

const Avatar = () => {
    return (
        <div className={'wrap'}>
            <img className={styles.avatar} src="https://via.placeholder.com/250x250" alt="" />
        </div>
    );
}

export default Avatar;
