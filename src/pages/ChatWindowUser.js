import React,{useState} from 'react';
import UsersChat from '../components/UsersChat';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { dummyChatUsers } from '../utils/dummyUsers';

function ChatWindow() {
  const { userId } = useParams();
  const Id = parseInt(userId); // Convert the id to an integer

  const user = dummyChatUsers.find((user) => user.userId === Id);


  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newChatMessage = {
        content: newMessage,
        sender: 'dummyUser',
        timestamp: new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'}), 
      };
      setChatMessages([...chatMessages, newChatMessage]);
      setNewMessage('');
    }
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col md:flex-row h-full">
        {/* Sidebar */}
        <div className="md:w-1/4 hidden md:block bg-primaryBackground overflow-y-scroll">
          <UsersChat />
        </div>

        {/* Chat Content */}
        <div className="flex-1 flex flex-col bg-primaryBackground">
          {/* UserBar */}
          <div className="flex items-center p-2 bg-primaryBackground">
            <div className="flex items-center">
              <div className="w-8 h-8 mr-4"><Avatar src={user.profilePic} /></div>
              <div>
                <h2 className="font-semibold text-secondaryText">{user?.name}</h2>
                <p className="text-xs text-tertiaryTextLight">@{user?.username}</p>
              </div>
            </div>
          </div>

          {/* Chat messages */}
          <div className="h-screen overflow-y-auto p-4 bg-slate-800 flex justify-end flex-col items-end">
            {chatMessages.map((message, index) => (
              <div key={index} className="mb-2 ">
                <p className="text-white flex flex-col justify-end items-end bg-quinaryAccent rounded-md p-2">
                  <span className="font-semibold break words ">
                  {message.content} </span>
                  
                </p>
                <p className="text-[9px] text-right text-tertiaryTextLight">{message.timestamp}</p>
              </div>
            ))}
          </div>

          {/* Input Bar */}
          <div className="bg-septenaryHover2 rounded-md p-4 shadow-md flex">
            <input
              className="flex-1 outline-none bg-transparent pl-4 text-secondaryText"
              type="text"
              placeholder="Type a message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            />
            <button className="text-white" onClick={handleSendMessage}>
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
