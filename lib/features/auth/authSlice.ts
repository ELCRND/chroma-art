import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginCheckFetch, loginFetch, refreshTokenFetch } from "./authApi";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export interface AuthSliceState {
  currentUser: {
    email: string;
    _id: string;
  } | null;
  isLoading: boolean;
}

const initialState: AuthSliceState = {
  currentUser: null,
  isLoading: false,
};

export const signin = createAsyncThunk("api/users/signin", loginFetch);
export const loginCheck = createAsyncThunk(
  "api/users/login-check",
  loginCheckFetch
);
export const refreshToken = createAsyncThunk(
  "api/users/refresh",
  refreshTokenFetch
);

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: (create) => ({
    signOut: create.reducer((state) => {
      state.currentUser = null;
      Cookies.remove("jwt-session");
    }),
    setInitialStateFromCookies: create.reducer(
      (state, action: PayloadAction<AuthSliceState>) => {
        return (state = action.payload);
      }
    ),
  }),
  selectors: {
    selectIsLoading: (state) => state.isLoading,
    selectUser: (state) => state.currentUser,
  },
  extraReducers: (builder) => {
    builder.addCase(signin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      state.isLoading = false;
      const message = action.payload.warningMessage;
      if (message) {
        toast(action.payload.warningMessage);
      } else if (!message) {
        state.currentUser = action.payload.user;
        Cookies.set("jwt-session", JSON.stringify(action.payload.tokens));
        toast("Вход успешно выполнен");
        window.location.reload();
      }
    });
    builder.addCase(signin.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(loginCheck.fulfilled, (state, action) => {
      if (action.payload.message === "token is valid") {
        state.currentUser = action.payload.user;
        toast("Вход успешно выполнен");
      }
    });
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.currentUser = action.payload.user;
      Cookies.set("jwt-session", JSON.stringify(action.payload.tokens));
    });
  },
});

export const { signOut, setInitialStateFromCookies } = authSlice.actions;
export const { selectIsLoading, selectUser } = authSlice.selectors;
