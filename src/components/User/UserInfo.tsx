import * as React from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";

import { User } from "./user";
import { GlobalState } from "../../reducers/appReducer";

interface Props {
  userName: string;
}

interface StateProps {
  user?: User;
}

const UserInfo: React.FunctionComponent<Props & StateProps> = ({
  user,
  userName
}) => {
  if (!user) {
    return null;
  }
  return user.message ? (
    <div className="mt-10">
      No User found with username: <b>{userName}</b>
    </div>
  ) : (
    <div className="flex">
      <Avatar src={user.avatar_url} alt={"User Avatar"} className="avatar" />
      <div className="ml-10 font-2">{user.name || user.login}</div>
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
