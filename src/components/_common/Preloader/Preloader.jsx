import loadingGif from "../../../lib/img/preloading.gif";
import styles from "./Preloader.module.scss";

const Preloader = (props) => {
    return <img className={styles.gif} src={loadingGif}></img>;
};

export default Preloader;
