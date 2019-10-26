import { User } from "../components/User/user";

export interface Action {
  type: string;
  payload?: any;
}

export const userActions = {
  FETCH_USER: "FETCH_USER",
  USER_FETCHED: "USER_FETCHED"
};

export const fetchUser = (userName: string) => ({
  type: userActions.FETCH_USER,
  payload: userName
});

export const userFetched = (userData: User) => ({
  type: userActions.USER_FETCHED,
  payload: userData
});
