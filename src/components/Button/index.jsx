import { useHistory } from "react-router-dom";
import { Container } from "./styles";

function Button({ placeholder, maxWidth, color, ...rest }) {
  return (
    <Container maxWidth={maxWidth} color={color} {...rest}>
      {placeholder}
    </Container>
  );
}
export default Button;
