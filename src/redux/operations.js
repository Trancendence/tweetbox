import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6434576f582420e2317a09d2.mockapi.io";

export const fetchTweets = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTweets = createAsyncThunk(
  "users/editTweets",
  async ({ id, isFollowing, followers }, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${id}`, {
        followers: isFollowing ? followers - 1 : followers + 1,
        isFollowing: !isFollowing,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);