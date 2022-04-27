import { useState } from "react";
import ModalTecDelete from "../ModalTecDelete";

function Card({ tec }) {
  const [openModal, setOpenModal] = useState(false);

  function handleModal() {
    setOpenModal(!openModal);
  }

  return (
    <>
      {openModal && (
        <ModalTecDelete
          openModal={openModal}
          handleModal={handleModal}
          tec={tec}
        />
      )}
      <li onClick={() => handleModal()}>
        <h3>{tec.title}</h3>
        <span>{tec.status}</span>
      </li>
    </>
  );
}
export default Card;
