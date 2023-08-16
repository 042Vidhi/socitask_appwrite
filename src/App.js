import React from 'react';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from './pages/Home'; 
import ChatWindow from './pages/ChatWindow';
import ChatWindowUser from './pages/ChatWindowUser'; 
import PostWindow from './pages/PostWindow';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';

function App() {
  return (
    <Router>
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/chat" element={<ChatWindow/>} />
          <Route path="/notifications" element={<Notifications/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/chat/:userId" element={<ChatWindowUser/>} />
          <Route path="/posts/:postId" element={<PostWindow/>} />
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;
