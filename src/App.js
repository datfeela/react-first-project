import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Chat from './components/Chat/Chat';
import Feed from './components/Feed/Feed';
import Audio from './components/Audio/Audio';
import Settings from './components/Settings/Settings';


import { Route, Routes } from 'react-router-dom';
import Friends from './components/Friends/Friends';



const App = (props) => {
  return (
    <div className="App">
      <Header />
      <div className="App__wrap">
        <main className="main">

          <Routes>
            <Route path='/' element={<Profile state={props.state.profilePage} addPost = {props.addPost} />} />
            <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost} />} />
            <Route path='/messages' element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path='/dialog' element={<Chat />} />
            <Route path='/friends' element={<Friends state={props.state.friendsPage} />} />
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

