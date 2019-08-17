import * as React from "react";
import { User } from "./user";

interface Props {
  user: User;
}

const UserInfo: React.FunctionComponent<Props> = ({ user }) => {
  return (
    <div className="flex">
          <img src={user.avatar_url} width={50} height={50} alt={'User Avatar'}/>
      <div>{user.login}</div>
    </div>
  );
};

export default UserInfo;
