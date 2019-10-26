import { Action, userActions } from "../actions/action";
import { User } from "../components/User/user";

export interface GlobalState {
  isLoading: boolean;
  user?: User;
}

const initialState = {
  isLoading: false
};

const reducer = (state: GlobalState = initialState, action: Action) => {
  switch (action.type) {
    case userActions.FETCH_USER:
      return { ...state, isLoading: true };
    case userActions.USER_FETCHED:
      return { ...state, user: action.payload, isLoading: true };
    default:
      return state;
  }
};
export default reducer;
