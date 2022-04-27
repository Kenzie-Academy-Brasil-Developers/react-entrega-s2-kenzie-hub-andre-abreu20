import { useEffect, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import ButtonBlack from "../../components/ButtonBlack";
import Card from "../../components/Card";
import Logo from "../../components/Logo";
import ModalTec from "../../components/ModalTec";
import api from "../../services/api";
import {
  Container,
  ContainerCard,
  ContainerCourses,
  ContainerLogoButton,
  ContainerTitle,
} from "./styles";

function Dashboard({ authenticated, setAuthenticated }) {
  const history = useHistory();
  const [user] =
    useState(JSON.parse(localStorage.getItem("@KenzieHub:user"))) || "";
  const { name, course_module } = user;
  const [open, setOpen] = useState(false);
  const [showTecs, setShowTecs] = useState(false);
  const [tecs, setTecs] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleTecs() {
    api.get(`/users/${user.id}`).then((response) => {
      const arrayTecs = response.data.techs;
      setTecs(arrayTecs);
    });
  }

  function handleShowTecs() {
    if (tecs.length > 0) {
      setShowTecs(true);
    } else {
      setShowTecs(false);
    }
  }

  useEffect(() => {
    handleTecs();
    handleShowTecs();
  });

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Container>
        {open && (
          <ModalTec
            setTecs={setTecs}
            open={open}
            handleClose={handleClose}
          ></ModalTec>
        )}
        <ContainerLogoButton>
          <Logo />
          <ButtonBlack
            width="55px"
            height="32px"
            onClick={() => {
              localStorage.clear();
              setAuthenticated(false);
              history.push("/");
            }}
          >
            Sair
          </ButtonBlack>
        </ContainerLogoButton>
        <ContainerCard>
          <h2>Olá, {name}</h2>
          <span>{course_module}</span>
        </ContainerCard>
        <ContainerTitle>
          <h4>Tecnologias</h4>
          <ButtonBlack width="32px" height="32px" onClick={() => handleOpen()}>
            +
          </ButtonBlack>
        </ContainerTitle>
        <ContainerCourses showTecs={showTecs}>
          {tecs &&
            tecs.map((tec, index) => (
              <Card
                tec={tec}
                open={open}
                handleClose={handleClose}
                key={index}
              />
            ))}
        </ContainerCourses>
      </Container>
    </>
  );
}
export default Dashboard;
