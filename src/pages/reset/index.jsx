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
    sendPasswordReset(email);
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full md:h-screen items-center justify-center gap-5 py-5 px-5">
      <div className="flex justify-center items-center rounded-xl relative bg-[url('/login-signup.png')] w-full h-[340px] lg:h-full bg-cover bg-no-repeat bg-center">
        <h4 className="absolute top-5 uppercase">3legant</h4>
      </div>
      <div className="flex w-full h-full flex-col items-center justify-center gap-6 px-10 flex-auto">
        <h4 className="font-medium text-2xl md:text-4xl lg:text-[40px] xl:text-[48px] text-gray-07">
          Reset Password
        </h4>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          className="text-base leading-[26px] text-gray-04 outline-none pb-2 border-b w-full max-w-[480px]"
        />
        <button
          className="w-full max-w-[480px] bg-gray-07 text-white py-3 rounded-lg disabled:bg-gray-07/25"
          onClick={handleClick}
        >
          Send e-mail to reset
        </button>
      </div>
    </div>
  );
};

export default Reset;
