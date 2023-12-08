import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/home");
  }, [user, loading]);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful, userCredential.user contains the user information
        if (userCredential.user != undefined) {
          alert("Successful login");
        }
        // Redirect the user to the desired location, e.g., navigate("/home");
      })
      .catch((error) => {
        // An error occurred during login
        alert("Login Failed: Check e-mail and password!"); // Displaying the error message
      });
  };

  return (
    <div className="flex gap-[98px] items-center w-full">
      <div className="w-[736px] h-screen overflow-hidden">
        <img src={"/login-signup.png"} alt="login_banner" className="" />
      </div>
      <div className="flex flex-col items-center gap-6">
        <h4 className="font-medium text-[40px] leading-[44px] text-gray-07">
          Sign In
        </h4>
        <p className="font-semibold text-[16px] leading-[26px] text-gray-04">
          Still not have an account?
          <Link to={'/signup'} className="text-sec-green cursor-pointer"> Sign up</Link>
        </p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          className="text-base leading-[26px] text-gray-04 outline-none pb-2 border-b w-[480px]"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="text-base leading-[26px] text-gray-04 outline-none pb-2 border-b w-[480px]"
        />
        <div className="flex items-end justify-end w-full -mt-5 text-blue-600 text-xs">
          <Link to="/reset">Forgot Password</Link>
        </div>
        <button
          className="w-[480px] bg-gray-07 text-white py-3 rounded-lg disabled:bg-gray-07/25"
          onClick={handleLogin}
        >
          Log In
        </button>
        <span>or login with</span>
        <button onClick={signInWithGoogle}>
          <img src="/google.png" alt="google_login" className="w-11 h-11" />
        </button>
      </div>
    </div>
  );
};

export default SignIn;
