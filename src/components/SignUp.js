// SignUp.js

import firebase from "../firebase";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        // An error occurred
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
