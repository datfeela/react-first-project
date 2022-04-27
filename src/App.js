import React, { lazy, Suspense } from "react";
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { connect } from "react-redux";
import { initialize } from './redux/appReducer'

import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import Preloader from "./components/_common/Preloader/Preloader";

//! import Settings from './components/Settings/Settings';

const Login = lazy(() => import('./components/Login/Login'))
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const Dialogs = lazy(() => import('./components/Dialogs/Dialogs'))
const ChatContainer = lazy(() => import('./components/Chat/ChatContainer'))
const Friends = lazy(() => import('./components/Friends/Friends'))
const Users = lazy(() => import('./components/Users/Users'))


class App extends React.Component {
  componentDidMount = () => {
    this.props.initialize();
  };

  render = () => {
    if (this.props.isInitialized) {
      return (
        <div className="App">
          <HeaderContainer />
          <div className="App__wrap">
            <main className="main">
              <Suspense fallback={<div></div>}>
                {/* <div className="preloader-wrap"><Preloader /></div> */}
                <Routes>
                  <Route path='/profile' element={<ProfileContainer />} />
                  <Route path='/profile/:userId' element={<ProfileContainer />} />
                  <Route path='/messages' element={<Dialogs />} />
                  <Route path='/dialog/:userId' element={<ChatContainer />} />
                  <Route path='/friends' element={<Friends />} />
                  <Route path='/users' element={<Users />} />
                  <Route path='/login' element={<Login />} />
                  {/* <Route path='*' element={<Error/> }/> */}
                  {/* <Route path='/feed' element={<Feed />} /> */}
                  {/* <Route path='/audio' element={<Audio />} /> */}
                  {/* <Route path='/settings' element={<Settings />} /> */}

                </Routes>
              </Suspense>
            </main>
            <SidebarContainer />
          </div>
        </div >
      );
    }
    return (
      <div className="App">
        {/*big preloader */}
      </div>

    )
  };
}

const mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitialized
  }
}

const dispatchObj = {
  initialize
}

export default connect(mapStateToProps, dispatchObj)(App)

