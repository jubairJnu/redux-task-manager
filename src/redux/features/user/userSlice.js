import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: 'Jubair',
  email: 'email@mail.com',
 
};

const userSlice = createSlice({
  name:'userSlice',
  initialState,
  reducers:{}
})

export default userSlice.reducer; 