import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { fetchUser } from "./actions/action";
import "./index.css";
import UserInfo from "./components/User/UserInfo";

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
    <div>
      <div className="center-y">
        <TextField
          placeholder="Search by User Name"
          onChange={updateUserName}
          value={userName}
          variant={"outlined"}
        />
        <div className="mx-10" />
        <Button onClick={searchUser} color={"primary"} variant={"contained"}>
          Search
        </Button>
      </div>
      <div className="user-info-wrapper">
        <UserInfo userName={userName} />
      </div>
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
