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
    <div className="flex flex-col md:flex-row w-full h-full md:h-screen items-center justify-center gap-5 py-5 px-5">
      <div className="flex justify-center items-center rounded-xl relative bg-[url('/login-signup.png')] w-full h-[340px] lg:h-full bg-cover bg-no-repeat bg-center">
        <h4 className="absolute top-5 uppercase">3legant</h4>
      </div>
      <div className="flex w-full h-full flex-col items-center justify-center gap-6 px-10 flex-auto">
        <h4 className="font-medium text-2xl md:text-4xl lg:text-[40px] xl:text-[48px] text-gray-07">
          Sign up
        </h4>
        <p className="font-semibold text-[12px] sm:text-[16px] leading-[26px] text-gray-04">
          Already have an account?{" "}
          <Link to={"/"} className="text-sec-green cursor-pointer">
            Sign in
          </Link>
        </p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required={true}
          className="text-base leading-[26px] text-gray-04 outline-none pb-2 border-b w-full max-w-[480px]"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          className="text-base leading-[26px] text-gray-04 outline-none pb-2 border-b w-full max-w-[480px]"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="text-base leading-[26px] text-gray-04 outline-none pb-2 border-b w-full max-w-[480px]"
        />
        <div className="flex gap-2 items-start sm:items-center w-full max-w-[480px]">
          <input
            type="checkbox"
            className="w-6 h-6"
            onClick={handleClickPrivacy}
            defaultChecked={isPrivacyChecked}
          />
          <p className="font-semibold text-[12px] sm:text-[16px] leading-[26px] text-gray-04">
            I agree with{" "}
            <span className="font-semibold text-gray-07 cursor-pointer">
              Privacy Policy{" "}
            </span>
            and{" "}
            <span className="font-semibold text-gray-07 cursor-pointer">
              Terms of Use
            </span>
          </p>
        </div>
        <button
          className="w-full max-w-[480px] bg-gray-07 text-white py-3 rounded-lg disabled:bg-gray-07/25"
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
