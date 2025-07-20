import { useState } from 'react';
import ChatSidebar from '../components/ChatSidebar';
import ChatHeader from '../components/ChatHeader';
import ChatMessages from '../components/ChatMessages';
import ChatInput from '../components/ChatInput';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hey there!', fromMe: false },
    { text: 'Hello! How are you?', fromMe: true },
  ]);

  const navigate = useNavigate();

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, fromMe: true }]);
      setMessage('');
    }
  };

  const handleLogout = () => {
    // dispatch(logoutUser());
    navigate('/');
  };

  return (
    <div className="min-h-screen flex text-sm bg-gray-50">
      <ChatSidebar
        users={['Alice', 'Bob', 'Charlie', 'David', 'Eve']}
        onLogout={handleLogout}
      />
      <section className="w-3/4 flex flex-col">
        <ChatHeader userName="Alice" />
        <ChatMessages messages={messages} />
        <ChatInput message={message} setMessage={setMessage} onSend={handleSend} />
      </section>
    </div>
  );
};

export default Chat;
