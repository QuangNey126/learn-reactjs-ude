import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";

export const register = createAsyncThunk(
    'users/register',
    async (payload) => {
      // call API to resgister
      const data = await userApi.register(payload);

      // save data to local storage
      localStorage.setItem('access_token', data.jwt);
      localStorage.setItem('user', JSON.stringify(data.user));

      // return user data
      return data.user;
    }
  )

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        setting: {},
    },
    reducers: {},
    extraReducers: {
        [register.fullfilled]: (state, action) => {
            state.current = action.payload
        },
    },
});

const { reducer} = userSlice;
export default reducer;