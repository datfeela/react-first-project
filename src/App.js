import React from "react";
import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Login from './components/Login/Login'
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ChatContainer from './components/Chat/ChatContainer';
import Feed from './components/Feed/Feed';
import Audio from './components/Audio/Audio';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import Users from './components/Users/Users';
import ProfileContainer from './components/Profile/ProfileContainer';

import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';

import { connect } from "react-redux";
import { initialize } from './redux/appReducer'


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
              <Routes>
                <Route path='/profile' element={<ProfileContainer />} />
                <Route path='/profile/:userId' element={<ProfileContainer />} />
                <Route path='/messages' element={<DialogsContainer />} />
                <Route path='/dialog/:userId' element={<ChatContainer />} />
                <Route path='/friends' element={<Friends />} />
                <Route path='/users' element={<Users />} />
                <Route path='/login' element={<Login />} />

                {/* <Route path='*' element={<Error/> }/> */}
                {/* <Route path='/feed' element={<Feed />} /> */}
                {/* <Route path='/audio' element={<Audio />} /> */}
                {/* <Route path='/settings' element={<Settings />} /> */}
              </Routes>
            </main>
            <SidebarContainer />
          </div>
        </div>
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

