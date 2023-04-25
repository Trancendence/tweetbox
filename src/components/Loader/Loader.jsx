import { RotatingLines } from "react-loader-spinner";
import { Box } from "./Loader.styled";

export const Loader = () => {
  return (
    <Box>
      <RotatingLines
        strokeColor="#5CD3A8"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Box>
  );
};