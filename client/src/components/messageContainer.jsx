import React from "react";
import Messages from "./Messages";
import SendInput from "./SendInput";

const MessageContainer = () => {
  const selectedUser = "test";
  return (
    <>
      {selectedUser !== null ? (
        <div className="md:min-w-[550px] flex flex-col">
          <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2">
            <div className="avatar  online">
              {/* <div className={`avatar ${isOnline ? 'online' : ''}`}> */}
              <div className="w-12 rounded-full">
                <img
                  src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                  alt="user-profile"
                />
                {/* <img src={selectedUser?.profilePhoto} alt="user-profile" /> */}
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between gap-2">
                {/* <p>{selectedUser?.fullName}</p> */}
                <p>Test Name</p>
              </div>
            </div>
          </div>
          <Messages />
          <SendInput />
        </div>
      ) : (
        <div className="md:min-w-[550px] flex flex-col justify-center items-center">
          <h1 className="text-4xl text-white font-bold">Hi </h1>
          {/* <h1 className='text-4xl text-white font-bold'>Hi,{authUser?.fullName} </h1> */}
          <h1 className="text-2xl text-white">Let's start conversation</h1>
        </div>
      )}
    </>
  );
};

export default MessageContainer;
