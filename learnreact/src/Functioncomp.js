import React, { useState } from "react";

export default function Functioncomp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidatin, setpasswordValidatin] = useState("");
  const [nameV, setnameV] = useState("");

  const inputHandler = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    }
    if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };
  const onSubmit = () => {
    if (name.length < 5) {
      setnameV("name sould atleast 5 character");
    } else {
      setnameV("");
    }
    if (password.length <= 7) {
      setpasswordValidatin("password sould atleast 7 character");
    } else {
      setpasswordValidatin("");
    }
  };
  return (
    <div>
      <h1>Hi Welcome to First Page</h1>
      Name : <input type="text" name="name" onKeyUp={inputHandler} />
      <div>{nameV}</div>
      <br></br>
      Password: <input type="password" name="password" onKeyUp={inputHandler} />
      <div>{passwordValidatin}</div>
      <input type="button" value="login" onClick={onSubmit} />
    </div>
  );
}
