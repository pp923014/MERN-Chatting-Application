import { Paperclip, Send, ImageIcon } from 'lucide-react';

const ChatInput = ({ message, setMessage, onSend }) => {
  return (
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
        onClick={onSend}
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
      >
        <Send size={20} />
      </button>
    </div>
  );
};

export default ChatInput;
