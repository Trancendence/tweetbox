import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constans";

export const selectTweets = (state) => state.tweets.items;
export const selectFilter = (state) => state.filters.status;
export const selectError = (state) => state.tweets.error;
export const selectIsLoading = (state) => state.tweets.isLoading;

export const selectVisibleTweets = createSelector(
  [selectTweets, selectFilter],
  (users, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.follow:
        return users.filter((user) => !user.isFollowing);
      case statusFilters.followings:
        return users.filter((user) => user.isFollowing);
      default:
        return users;
    }
  }
);