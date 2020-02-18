import { Action, createReducer, on } from '@ngrx/store';
import {
  setUser,
  SignOut,
  ToggleLoader,
} from '../actions/auth.actions';

interface State {
  user?: {
    password: string,
    email: string,
    token: string
  },
  loader: boolean,
}

const initialState: State = {
  user: null,
  loader: false,
};

const scoreboardReducer = createReducer(
  initialState,
  on(setUser, (state, payload) => ({
    ...state,
    user: payload.user,
  })),
  on(ToggleLoader, (state, payload) => ({
    ...state,
    loader: payload.loader,
  })),
  on(SignOut, state => ({
    ...state,
    user: null,
  })),
);

function reducer(state: State | undefined, action: Action) {
  return scoreboardReducer(state, action);
}

export default reducer;