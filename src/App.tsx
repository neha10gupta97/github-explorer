import React, { useState } from "react";
import "./App.css";
import UserInfo from "./User/UserInfo";
import { User } from "./User/user";

const App: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState<User>({} as User);

  const updateUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const searchUser = async () => {
    if (!userName) {
      console.log("enter user name");
    }

    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    setUser(data);
  };

  return (
    <div className="App">
      <input
        placeholder="User Name"
        onChange={updateUserName}
        value={userName}
      />
      <button onClick={searchUser}>Search</button>
      <UserInfo user={user} />
    </div>
  );
};

export default App;
