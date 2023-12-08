import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";

function SignUp() {
  const [isPrivacyChecked, setPrivacyChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) {
      alert("Please enter name");
      return;
    } else {
      registerWithEmailAndPassword(name, email, password);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/home");
  }, [user, loading]);

  const handleClickPrivacy = () => {
    setPrivacyChecked((prevState) => !prevState);
    console.log(isPrivacyChecked);
  };

  return (
    <div className="flex gap-[98px] items-center w-full">
      <div className="w-[736px] h-screen overflow-hidden">
        <img src={"/login-signup.png"} alt="login_banner" className="" />
      </div>
      <div className="flex flex-col items-center gap-6">
        <h4 className="font-medium text-[40px] leading-[44px] text-gray-07">
          Sign up
        </h4>
        <p className="font-semibold text-[16px] leading-[26px] text-gray-04">
          Already have an account?{" "}
          <Link to={"/"} className="text-sec-green cursor-pointer">Sign in</Link>
        </p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required={true}
          className="text-base leading-[26px] text-gray-04 outline-none pb-2 border-b w-[480px]"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          className="text-base leading-[26px] text-gray-04 outline-none pb-2 border-b w-[480px]"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="text-base leading-[26px] text-gray-04 outline-none pb-2 border-b w-[480px]"
        />
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="w-6 h-6"
            onClick={handleClickPrivacy}
            defaultChecked={isPrivacyChecked}
          />
          <p className="font-semibold text-[16px] leading-[26px] text-gray-04">
            I agree with{" "}
            <span className="font-semibold text-gray-07 cursor-pointer">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="font-semibold text-gray-07 cursor-pointer">
              Terms of Use
            </span>
          </p>
        </div>
        <button
          className="w-[480px] bg-gray-07 text-white py-3 rounded-lg disabled:bg-gray-07/25"
          onClick={register}
          disabled={!isPrivacyChecked}
        >
          Register
        </button>
        <span>or login / register with</span>
        <button disabled={!isPrivacyChecked} onClick={signInWithGoogle}>
          <img src="/google.png" alt="google_login" className="w-11 h-11" />
        </button>
      </div>
    </div>
  );
}

export default SignUp;
