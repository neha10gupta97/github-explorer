import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import TextField from "@material-ui/core/TextField";
import "./App.css";
import UserInfo from "./User/UserInfo";
import { fetchUser } from "./actions/action";

interface DispatchProps {
  fetchUser: (userName: string) => void;
}

const App: React.FC<DispatchProps> = props => {
  const [userName, setUserName] = useState("");

  const updateUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const searchUser = async () => {
    if (!userName) {
      console.log("enter user name");
      return;
    }
    props.fetchUser(userName);
  };

  return (
    <div className="App">
      <TextField
        placeholder="User Name"
        onChange={updateUserName}
        value={userName}
      />
      <button onClick={searchUser}>Search</button>
      <UserInfo />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUser: (userName: string) => dispatch(fetchUser(userName))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
