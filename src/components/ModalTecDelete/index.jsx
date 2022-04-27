import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Container, Header } from "./styled";
import Input from "../Input";
import { useForm } from "react-hook-form";
import DropDown from "../DropDown";
import Button from "../Button";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";

function ModalTecDelete({ openModal, handleModal, tec }) {
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
    boderRadius: "4px",
    boxShadow: 24,
  };

  const { title, status, id } = tec;
  const { register, handleSubmit } = useForm();
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  function removeTec() {
    console.log(id);
    console.log(token);
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((a) => {
        toast.success("Tecnologia removida com sucesso!");
        handleModal();
      })
      .catch((err) => {
        toast.error("Falha ao remover Tecnologia");
      });
  }

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Header>
            <h3>Tecnologia Detalhes</h3>
            <button onClick={() => handleModal()}>X</button>
          </Header>
          <Container>
            <form type="submit" onSubmit={handleSubmit(removeTec)}>
              <Input
                label="Nome do Projeto"
                placeholder={title}
                register={register}
                name="title"
              />
              <DropDown
                label="Status"
                types={[status]}
                defaultValue={status}
                register={register}
                name="status"
              />
              <section>
                <Button
                  placeholder="Salvar alterações"
                  maxWidth="204px"
                  color="#59323F"
                  type="button"
                  onClick={() => handleModal()}
                ></Button>
                <Button
                  placeholder="Excluir"
                  maxWidth="98px"
                  color="#868E96"
                  type="submit"
                ></Button>
              </section>
            </form>
          </Container>
        </Box>
      </Modal>
    </>
  );
}
export default ModalTecDelete;
