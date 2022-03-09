import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {AuthStoreState, User} from 'src/@types/store';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Token} from 'src/services/api/auth';

import initialState from './initial-state';

const register = (state: AuthStoreState, {payload}: PayloadAction<User>) => {
  if (state.token) {
    state.token.isRegistered = true;
    state.user = payload;
  }
};

const onboarded = (state: AuthStoreState) => {
  state.boarded = true;
};

export default createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register,
    onboarded,
  },
});
