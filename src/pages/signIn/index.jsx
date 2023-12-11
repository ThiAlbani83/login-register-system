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
    <div className="flex flex-col md:flex-row w-full h-full md:h-screen items-center justify-center gap-5 py-5 px-5">
      <div className="flex justify-center items-center rounded-xl relative bg-[url('/login-signup.png')] w-full h-[340px] lg:h-full bg-cover bg-no-repeat bg-center">
       <h4 className="absolute top-5 uppercase">3legant</h4>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-6 px-10 flex-auto">
        <h4 className="font-medium text-xl md:text-3xl lg:text-[40px] xl:text-[48px] text-gray-07">
          Sign In
        </h4>
        <p className="font-semibold text-[12px] sm:text-[16px] leading-[26px] text-gray-04">
          Still not have an account?
          <Link to={"/signup"} className="text-sec-green cursor-pointer ml-2">
            Sign up
          </Link>
        </p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          className="text-base leading-[26px] text-gray-04 outline-none pb-2 border-b w-full max-w-[480px]"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="text-base leading-[26px] text-gray-04 outline-none pb-2 border-b w-full max-w-[480px]"
        />
        <div className="flex items-end justify-end -mt-5 text-blue-600 text-xs w-full max-w-[480px]">
          <Link to="/reset">Forgot Password</Link>
        </div>
        <button
          className="w-full max-w-[480px] bg-gray-07 text-white py-3 rounded-lg disabled:bg-gray-07/25"
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
