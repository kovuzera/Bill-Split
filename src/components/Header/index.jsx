import { AiOutlineUserAdd } from "react-icons/ai";
import { MdFileUpload, MdPostAdd } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { Container, ModalStyle } from "./styles";
import { GrClose } from "react-icons/gr";

import Modal from "react-modal";
import { IntegrantAvatar } from "../IntegrantAvatar";

function Header() {
  const [isNewIntegrantModalOpen, setNewIntegrantModalOpen] = useState(false);
  const [isNewBillModalOpen, setNewBillModalOpen] = useState(false);
  const [isLogoutConfirmationModalOpen, setLogoutConfirmationModalOpen] =
    useState(false);

  function handleOpenNewIntegrantModal() {
    setNewIntegrantModalOpen(true);
  }

  function handleCloseNewIntegrantModal() {
    setNewIntegrantModalOpen(false);
  }

  function handleOpenNewBillModal() {
    setNewBillModalOpen(true);
  }

  function handleCloseNewBillModal() {
    setNewBillModalOpen(false);
  }

  function handleOpenLogoutConfirmationModal() {
    setLogoutConfirmationModalOpen(true);
  }

  function handleCloseLogoutConfirmationModal() {
    setLogoutConfirmationModalOpen(false);
  }

  return (
    <Container>
      <header>
        <h1>
          bill<span>$</span>plit
        </h1>
        <div className="buttons-area">
          <button
            onClick={handleOpenNewIntegrantModal}
            className="header-btn green"
          >
            <AiOutlineUserAdd size={24} />
          </button>
          <Modal
            closeTimeoutMS={100}
            overlayClassName="modal-overlay"
            className="modal-content"
            isOpen={isNewIntegrantModalOpen}
            onRequestClose={handleCloseNewIntegrantModal}
            ariaHideApp={false}
          >
            <ModalStyle>
              <button
                onClick={handleCloseNewIntegrantModal}
                className="close-btn"
              >
                <GrClose size={20} />
              </button>
              <h2>Adicionar Integrante</h2>
              <input
                className="text-input"
                type="text"
                placeholder="Nome do integrante"
              />
              <label htmlFor="file" className="file-label">
                <MdFileUpload size={24} />
                Enviar foto
              </label>
              <input
                className="file-input"
                type="file"
                name="file"
                id="file"
                accept="image/*"
              />
              <button className="send">Finalizar</button>
            </ModalStyle>
          </Modal>
          <button onClick={handleOpenNewBillModal} className="header-btn green">
            <MdPostAdd size={24} />
          </button>
          <Modal
            closeTimeoutMS={100}
            overlayClassName="modal-overlay"
            className="modal-content"
            isOpen={isNewBillModalOpen}
            onRequestClose={handleCloseNewBillModal}
          >
            <ModalStyle>
              <button onClick={handleCloseNewBillModal} className="close-btn">
                <GrClose size={20} />
              </button>
              <h2>Adicionar conta</h2>
              <input
                className="text-input"
                type="text"
                placeholder="Descrição"
              />
              <input className="text-input" type="text" placeholder="Valor" />
              <p>Caso o valor seja parcelado, informe o valor da parcela.</p>
              <h3>Quem ajudará a pagar?</h3>
              <div className="integrants">
                <IntegrantAvatar />
              </div>
              <button className="send">Finalizar</button>
            </ModalStyle>
          </Modal>
          <button className="header-btn">
            <BsCalendar3 color="gray" size={24} />
          </button>
          <button className="header-btn user">
            <AiOutlineUser size={24} />
          </button>
        </div>
      </header>
    </Container>
  );
}

export default Header;
