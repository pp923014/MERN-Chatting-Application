import React from 'react';
import Account from '../components/Account';

const Home = () => {
  return (
    <div className="min-h-screen flex bg-[#F3F0FF] ">
      {/* Left Section */}
      <div className="w-1/2 bg-blue-200 flex flex-col justify-center items-center rounded-r-[60px] p-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Welcome to Chat App</h1>
        <p className="text-lg text-blue-800 text-center px-4">
          Connect with your friends, share thoughts, and stay in touch anytime, anywhere.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-[#F3F0FF] flex justify-center items-center p-10">
        <Account />
      </div>
    </div>
  );
};

export default Home;

