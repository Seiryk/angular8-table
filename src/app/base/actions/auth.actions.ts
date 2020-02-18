import { createAction, props } from '@ngrx/store';

interface Action {
  type: string;
}

export const setUser = createAction(
  '[User Dialog] SignIn',
  props<{ user: any }>()
);

export const SignOut = createAction(
  '[User Dialog] SignOut',
);

export const ToggleLoader = createAction(
  '[User Dialog] Loader',
  props<{ loader: boolean }>()
);