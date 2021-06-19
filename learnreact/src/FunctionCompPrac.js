import React, { useState, useEffect } from "react";
import PropsFunc from "./PropsFunc";
export default function FunctionCompPrac() {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const [updatedname, setUpdateName] = useState("");
  const [updatePassword, setUpdatedPassword] = useState("");
  const printMessage = (e) => {
    if (e.target.name == "username") {
      setUserame(e.target.value);
    }
    if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };
  useEffect(() => {
    console.log(username);
    return () => {};
  }, [username]);

  const onSubmit = () => {
    setUpdateName(username);
    setUpdatedPassword(password);
  };

  return (
    <div>
      Name: <input type="text" name="username" onKeyUp={printMessage} />
      <br></br>
      Password: <input type="password" name="password" onKeyUp={printMessage} />
      <br></br>
      <input type="button" value="Register" onClick={onSubmit} />
      <PropsFunc props={updatedname} />
      <PropsFunc props={updatePassword} />
    </div>
  );
}
