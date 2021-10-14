import {  createSlice } from '@reduxjs/toolkit';



export const userSlice = createSlice({
name:"user", initialState :{
  user: null
 
},
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      
      state.user = action.payload;
    },
   
    lougout: (state) => {
      state.user = null;
    },
  },
 
});

export const { login, lougout} = userSlice.actions;

export const selectUser = (state) => state.user.user;



export default userSlice.reducer;
