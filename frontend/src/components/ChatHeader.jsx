const ChatHeader = ({ userName = 'Alice', status = 'Online' }) => {
  return (
    <div className="px-6 py-4 border-b bg-white flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold">{userName}</h3>
        <span className="text-xs text-green-500">{status}</span>
      </div>
      <div className="text-sm text-gray-400">Last seen: 1 min ago</div>
    </div>
  );
};

export default ChatHeader;
