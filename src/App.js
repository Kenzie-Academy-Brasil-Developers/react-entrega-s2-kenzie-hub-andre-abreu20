import { toast } from "react-toastify";
import Routes from "./routes";
import GlobalStyle from "./styles/globalStyle";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
