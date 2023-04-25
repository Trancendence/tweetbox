import { TweetsItem } from "../TweetsItem/TweetsItem";
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
import { selectVisibleTweets } from "../../redux/selectors";
import { ButtonLoadMore, List } from "./TweetsList.styled";
import { Item } from "../TweetsItem/TweetsItem.styled";

export const TweetsList = () => {
  const users = useSelector(selectVisibleTweets);
  const [page, setPage] = useState(1);

  const usersGroup = users.slice(0, page * 3);

  const isHidden = page * 3 >= users.length;

  const handleClick = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      <List>
        {usersGroup.map(({ id, ...restProps }) => (
          <Item key={id}>
            <TweetsItem id={id} {...restProps} />
          </Item>
        ))}
      </List>
      {isHidden ? null : (
        <ButtonLoadMore type="button" onClick={handleClick}>
          Load More
        </ButtonLoadMore>
      )}
    </>
  );
};