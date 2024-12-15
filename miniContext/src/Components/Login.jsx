import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  let { setUser } = useContext(UserContext);
  let handleClick = (e) => {
    e.preventDefault();
    setUser({ username, pass });
  };
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mb-3">Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="mb-2 w-full px-3 py-2 border-2 border-gray-300 rounded-md text-black"
      />
      {"  "}
      <input
        type="text"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
        className="mb-2 w-full px-3 py-2 border-2 border-gray-300 rounded-md text-black"
      />
        {"  "}
      <button
        onClick={handleClick}
        className="px-1 py-1 bg-teal-600 text-sm font-semibold rounded-lg"
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
