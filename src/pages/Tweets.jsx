import { useEffect } from "react";
import { TweetsList } from "../componens/TweetsList/TweetsList";
import { fetchTweets } from "../redux/operations";
import { useDispatch } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { Filter } from "../componens/Filter/Filter";
import { ButtonBack } from "../componens/Filter/Filter.styled";
import { selectIsLoading } from "../redux/selectors";
import { Loader } from "../componens/Loader/Loader";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function Tweets() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const location = useLocation();
   const goBack = location.state?.from ?? "/";


  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <Link to={goBack}>
        <ButtonBack type="button">Go Back</ButtonBack>
      </Link>
      <Filter />
      <TweetsList />
    </>
  );
}