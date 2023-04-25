import { createSlice } from '@reduxjs/toolkit';
import { fetchTweets, editTweets } from './operations';

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTweets.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTweets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
     .addCase(editTweets.pending, state => {
        state.isLoading = true;
      })
      .addCase(editTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              followers: action.payload.followers,
              isFollowing: action.payload.isFollowing,
            };
          }

          return item;
        });
      })
      .addCase(editTweets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
}
)
export const tweetsReducer = tweetsSlice.reducer;