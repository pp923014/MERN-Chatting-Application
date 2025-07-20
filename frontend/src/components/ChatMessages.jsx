import { useRef, useEffect } from 'react';

const ChatMessages = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
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
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
