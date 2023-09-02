import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/task/taskSlice";
import userSlice from "./features/user/userSlice";
const store = configureStore({
  reducer:{
    tasks : taskSlice,
    userslice: userSlice,
  },
});
export default store;