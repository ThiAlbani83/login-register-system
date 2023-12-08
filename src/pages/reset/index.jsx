import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleClick = () => {
    sendPasswordReset(email)
    navigate('/')
  }

  
  return (
    <div className="flex gap-[98px] items-center w-full">
      <div className="w-[736px] h-screen overflow-hidden">
        <img src={"/login-signup.png"} alt="login_banner" className="" />
      </div>
      <div className="flex flex-col items-center gap-6">
        <h4 className="font-medium text-[40px] leading-[44px] text-gray-07">
          Reset Password
        </h4>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          className="text-base leading-[26px] text-gray-04 outline-none pb-2 border-b w-[480px]"
        />
        <button
          className="w-[480px] bg-gray-07 text-white py-3 rounded-lg disabled:bg-gray-07/25"
          onClick={handleClick}
        >
          Send e-mail to reset
        </button>
      </div>
    </div>
  );
};

export default Reset;
