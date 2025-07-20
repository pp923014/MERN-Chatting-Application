import { Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChatSidebar = ({ users = [], onLogout }) => {
  const navigate = useNavigate();

  return (
    <aside className="w-1/4 bg-white border-r px-4 py-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold text-blue-600">Chats</h2>
        <input
          type="text"
          placeholder="Search users..."
          className="w-full p-2 border border-gray-300 rounded-md mt-4 focus:outline-none focus:ring focus:border-blue-400"
        />
        <div className="mt-4 space-y-2 overflow-y-auto max-h-[calc(100vh-250px)] pr-1">
          {users.map((user, index) => (
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
      </div>

      <div className="flex items-center justify-between pt-6 border-t text-gray-500">
        <div
          className="flex items-center gap-2 cursor-pointer hover:text-blue-500"
          onClick={() => navigate('/settings')}
        >
          <Settings size={20} />
          <span>Settings</span>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer hover:text-red-500"
          onClick={onLogout}
        >
          <LogOut size={20} />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
};

export default ChatSidebar;
