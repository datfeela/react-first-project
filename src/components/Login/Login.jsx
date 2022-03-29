import styles from "./Login.module.scss";
// import { connect } from "react-redux";
// import { useNavigate } from "react-router-dom";

const Login = (props) => {
    // if (props.isAuth) {
    //     const navigate = useNavigate();
    //     navigate(-1);
    // }
    return (
        <div className={styles.wrap}>
            <h1>login</h1>
        </div>
    );
};

// let mapStateToProps = (state) => {
//     return {
//         isAuth: state.auth.isAuth,
//     };
// };

// let LoginContainer = connect(mapStateToProps)(Login);

export default Login;
