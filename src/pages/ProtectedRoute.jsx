import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, currentUser, test }) => {
  const [redirect, setRedirect] = useState(false);
  if (!test) return children;

  useEffect(() => {
    if (!currentUser) {
      const timer = setTimeout(() => setRedirect(true), 5000);

      return () => clearTimeout(timer);
    }
  }, [currentUser]);

  if (!currentUser) {
    if (redirect) {
      return <Navigate to="/" />;
    } else {
      return (
        <div className="flex flex-col gap-8 justify-center items-center h-screen p-4 bg-gray-700 shadow-[0_0_50px_rgba(0,0,0,1)_inset]">
          <div className="flex flex-col gap-4 justify-center items-center p-8 rounded-lg hazard border border-gray-800 max-w-[450px]">
            <div className="flex flex-col gap-4 justify-center items-center rounded-lg bg-white p-4 border border-gray-800">
              <div className="w-[250px]">
                <img src="/more memes.jpeg" alt="" className="w-full" />
              </div>
              <div className="w-2/3 text-center flex flex-col gap-4">
                <p>You have angered Dennis Nedry.</p>
                <p>
                  Go to the Raptor pen and submit yourself to divine judgement
                  or the whole park's power will be cut off.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src="/jurassic meme.png" alt="" className="w-full" />
          </div>
        </div>
      );
    }
  } else {
    return children;
  }
};

export default ProtectedRoute;
