import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Chat from './components/Chat/Chat';
import Feed from './components/Feed/Feed';
import Audio from './components/Audio/Audio';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import Users from './components/Users/Users';
import ProfileContainer from './components/Profile/ProfileContainer';

import HeaderContainer from './components/Header/HeaderContainer';



const App = (props) => {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="App__wrap">
        <main className="main">
          <Routes>
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/messages' element={<DialogsContainer/>} />
            <Route path='/dialog' element={<Chat />} />
            <Route path='/friends' element={<Friends state={props.state.friendsPage} />} />
            <Route path='/users' element={<Users/>} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/audio' element={<Audio />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </main>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;

