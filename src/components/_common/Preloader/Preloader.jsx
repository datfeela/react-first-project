import loadingGif from "../../../lib/img/preloading.gif";
import styles from "./Preloader.module.scss";

const Preloader = (props) => {
    return <div className={styles.wrap}>
        <img className={styles.gif} src={loadingGif}></img>
    </div>
};

export default Preloader;
