import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Container, Header } from "./styled";
import Input from "../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import DropDown from "../DropDown";
import Button from "../Button";
import api from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";

function ModalTec({ open, handleClose }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "260px",
    width: "100%",
    maxWidth: "390px",
    paddingBottom: "40px",
    bgcolor: "#212529",
    border: "2px solid #000",
    borderRadius: "4px",
    boxShadow: 24,
  };

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatorio!"),
    status: yup.string().required("Campo Obrigatorio!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        handleClose();
        toast.success("Tecnologia cadastrada com sucesso!");
      })
      .catch((_) => {
        toast.error("Falha ao Cadastrar Tecnologia");
      });
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Header>
            <h3>Cadastrar Tecnologia</h3>
            <button onClick={() => handleClose()}>X</button>
          </Header>
          <Container>
            <form type="submit" onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="Nome"
                placeholder="Tecnologia"
                register={register}
                name="title"
                error={errors.title?.message}
              />
              <DropDown
                label="Selecionar status"
                types={["Iniciante", "Intermediário", "Avançado"]}
                defaultValue="Selecione uma categoria"
                register={register}
                name="status"
                error={errors.status?.message}
              />
              <Button
                placeholder="Cadastrar Tecnologia"
                maxWidth="263px"
                color="#FF577F"
                type="submit"
              ></Button>
            </form>
          </Container>
        </Box>
      </Modal>
    </>
  );
}
export default ModalTec;
