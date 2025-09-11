import { configureStore } from "@reduxjs/toolkit";
import {
  dashboardDeleteSlice,
  dashboardPutSlice,
  dashboardSlice,
} from "./crud/redux.reducer";

export const reduxstore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      dashboard: dashboardSlice.reducer,
    },
    preloadedState,
  });
};

export const reduxclientstore = configureStore({
  reducer: {
    dashboardUpdate: dashboardPutSlice.reducer,
    dashboardDelete: dashboardDeleteSlice.reducer,
  },
});

// Types
export type AppStore = ReturnType<typeof reduxstore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
