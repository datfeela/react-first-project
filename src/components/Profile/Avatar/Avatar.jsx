import styles from "./Avatar.module.scss";

const Avatar = (props) => {
    return (
        <div className={"wrap"}>
            <img className={styles.avatar} src={props.photo ? props.photo : "https://via.placeholder.com/250x250"} alt="" />
        </div>
    );
}

export default Avatar;
