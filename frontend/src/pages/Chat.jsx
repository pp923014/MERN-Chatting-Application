import { useState } from 'react';
import { Paperclip, Send, ImageIcon } from 'lucide-react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hey there!', fromMe: false },
    { text: 'Hello! How are you?', fromMe: true },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, fromMe: true }]);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen flex text-sm bg-gray-50">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white border-r px-4 py-6 space-y-4">
        <h2 className="text-xl font-semibold text-blue-600">Chats</h2>
        <input
          type="text"
          placeholder="Search users..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
        <div className="space-y-2 mt-4">
          {['Alice', 'Bob', 'Charlie'].map((user, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 cursor-pointer transition"
            >
              <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-white font-bold">
                {user[0]}
              </div>
              <span className="font-medium">{user}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Chat Window */}
      <section className="w-3/4 flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b bg-white flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Alice</h3>
            <span className="text-xs text-green-500">Online</span>
          </div>
          <div className="text-sm text-gray-400">Last seen: 1 min ago</div>
        </div>

        {/* Messages */}
        <div className="flex-1 px-6 py-4 overflow-y-auto space-y-3 bg-blue-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-xs px-4 py-2 rounded-2xl shadow ${
                msg.fromMe
                  ? 'bg-blue-500 text-white ml-auto'
                  : 'bg-white text-gray-800 mr-auto'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="p-4 bg-white border-t flex items-center gap-2">
          <label className="cursor-pointer text-gray-500 hover:text-blue-500">
            <ImageIcon size={20} />
            <input type="file" hidden />
          </label>
          <label className="cursor-pointer text-gray-500 hover:text-blue-500">
            <Paperclip size={20} />
            <input type="file" hidden />
          </label>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
          >
            <Send size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Chat;
