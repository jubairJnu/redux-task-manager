import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: 'mr',
  email: 'email@mail.com',
  userTask:[]
}

const userSlice = createSlice({
  name:'userSlice',
  initialState,
  reducers:{}
})

export default userSlice.reducer;