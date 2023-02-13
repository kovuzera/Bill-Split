import { AiOutlineUserAdd } from "react-icons/ai";
import { MdPostAdd, MdFileUpload } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { useState } from "react";
import { Container, ModalStyle } from "./styles";
import { GrClose } from "react-icons/gr";

import Modal from "react-modal";

function Header() {
  const [isNewIntegrantModalOpen, netNewIntegrantModalOpen] = useState(false);

  function handleOpenNewIntegrantModal() {
    netNewIntegrantModalOpen(true);
  }

  function handleCloseNewIntegrantModal() {
    netNewIntegrantModalOpen(false);
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
            overlayClassName="login-modal-overlay"
            className="login-modal-content"
            isOpen={isNewIntegrantModalOpen}
            onRequestClose={handleCloseNewIntegrantModal}
          >
            <ModalStyle>
              <button
                onClick={handleCloseNewIntegrantModal}
                className="close-btn"
              >
                <GrClose size={20} />
              </button>
              <h2>Adicionar Integrante</h2>
              <input type="text" placeholder="Nome do integrante"/>
              <button className="send-photo">
                <MdFileUpload size={20} />
                Enviar foto
              </button>
              <button className="send">
                Finalizar
              </button>
            </ModalStyle>
          </Modal>
          <button className="header-btn green">
            <MdPostAdd size={24} />
          </button>
          <button className="header-btn">
            <BsCalendar3 color="gray" size={24} />
          </button>
        </div>
      </header>
    </Container>
  );
}

export default Header;
