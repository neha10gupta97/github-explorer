import * as React from "react";
import { connect } from "react-redux";
import { GlobalState } from "../reducers/appReducer";
import { User } from "./user";

interface StateProps {
  user?: User;
}

const UserInfo: React.FunctionComponent<StateProps> = ({ user }) => {
  return !user ? null : (
    <div className="flex">
      <img src={user.avatar_url} width={50} height={50} alt={"User Avatar"} />
      <div>{user.login}</div>
    </div>
  );
};

const mapStateToProps = (state: GlobalState) => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  null
)(UserInfo);
