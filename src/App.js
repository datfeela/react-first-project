import React, { createContext, lazy, Suspense, useEffect } from "react";
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { connect } from "react-redux";
import { initialize, setLanguage, setTheme } from './redux/appReducer'

import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import Preloader from "./components/_common/Preloader/Preloader";
import { selectAppIsInit, selectCurrentLanguage, selectCurrentTheme } from "./redux/appSelectors";

//! import Settings from './components/Settings/Settings';

const Login = lazy(() => import('./components/Login/Login'))
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const Dialogs = lazy(() => import('./components/Dialogs/Dialogs'))
const ChatContainer = lazy(() => import('./components/Chat/ChatContainer'))
const Friends = lazy(() => import('./components/Friends/Friends'))
const Users = lazy(() => import('./components/Users/Users'))

export const AppContext = createContext();

const App = ({ isInitialized, initialize, currentLanguage, currentTheme }) => {

  useEffect(() => {
    initialize();
  })

  if (isInitialized) {
    return (
      <AppContext.Provider value={{ currentLanguage, currentTheme }}>
        <div className={"App" + (currentTheme === 'dark' ? ' App_dark' : '')}>
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
      </AppContext.Provider>
    );
  }
  return (
    <div className="App">
      {/*big preloader */}
    </div>

  )
}

const mapStateToProps = (state) => {
  return {
    isInitialized: selectAppIsInit(state),
    currentTheme: selectCurrentTheme(state),
    currentLanguage: selectCurrentLanguage(state)
  }
}

const dispatchObj = {
  initialize,
  setTheme,
  setLanguage
}

export default connect(mapStateToProps, dispatchObj)(App)

