//Login.js

import firebase from "../firebase";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Logged in successfully
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
      <h2>Login</h2>
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

        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
