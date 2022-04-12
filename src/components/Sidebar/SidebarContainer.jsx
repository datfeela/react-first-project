import { connect } from "react-redux";
import Sidebar from "./Sidebar";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

let dispatchObj = {
};


export default connect(mapStateToProps, dispatchObj)(Sidebar);
