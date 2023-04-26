import logo from "../../images/logo.png";
import tweet from "../../images/tweet.png";
import { useDispatch } from "react-redux/es/exports";
import { editTweets } from "../../redux/operations";
import PropTypes from 'prop-types';

import {
  Avatar,
  ButtonFollow,
  ButtonText,
  ElipseAvatar,
  Followers,
  Line,
  LogoPicture,
  Tweets,
  TweetsPicture,
} from "./TweetsItem.styled";

export const TweetsItem = ({
  id,
  user,
  tweets,
  followers,
  avatar,
  isFollowing,
}) => {
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(
      editTweets({id, followers, isFollowing})
    );
  };

  return (
    <div>
      <LogoPicture>
        {" "}
        <source srcSet={`${logo}`} />
        <img src={logo} alt="logo" />
      </LogoPicture>
      <TweetsPicture>
        {" "}
        <source srcSet={`${tweet}`} />
        <img src={tweet} alt="tweets" />
      </TweetsPicture>
      <Line />
      <ElipseAvatar />

      <Avatar src={avatar} alt={user} />
      <Tweets>{tweets} tweets</Tweets>
      <Followers>{followers.toLocaleString("en-US")} followers</Followers>

      {isFollowing ? (
        <ButtonFollow
          isFollow={isFollowing}
          type="button"
          onClick={handleUpdate}
        >
          <ButtonText>following</ButtonText>
        </ButtonFollow>
      ) : (
        <ButtonFollow
          isFollow={isFollowing}
          type="button"
          onClick={handleUpdate}
        >
          <ButtonText>follow</ButtonText>
        </ButtonFollow>
      )}
    </div>
  );
};


TweetsItem.propTypes = {
  id: PropTypes.string,
  user: PropTypes.string,
  followers: PropTypes.number,
  tweets: PropTypes.number,
  avatar: PropTypes.string,
}
TweetsItem.propTypes = {
  isFollowing: PropTypes.bool,
}