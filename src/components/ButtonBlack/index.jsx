import { useHistory } from "react-router-dom";
import { Button } from "./style";

function ButtonBlack({ children, width, height, ...rest }) {
  const history = useHistory();
  return (
    <Button
      width={width}
      height={height}
      onClick={() => history.push("/login")}
      {...rest}
    >
      {children}
    </Button>
  );
}
export default ButtonBlack;
