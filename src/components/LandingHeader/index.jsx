import { GrClose } from "react-icons/gr";
import { FiLogIn } from "react-icons/fi";
import Modal from "react-modal";
import { useState } from "react";
import { Container, ModalContent, ModalStyle } from "./styles";
import { Link } from "react-router-dom";

function LandingHeader() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }

  return (
    <Container>
      <header>
        <h1>
          bill<span>$</span>plit
        </h1>
        <button onClick={handleOpenLoginModal}>
          <FiLogIn size={24} />
        </button>
        <Modal
          overlayClassName="login-modal-overlay"
          className="login-modal-content"
          isOpen={isLoginModalOpen}
          onRequestClose={handleCloseLoginModal}
        >
          <ModalStyle>
            <ModalContent>
              <button onClick={handleCloseLoginModal} className="close-btn">
                <GrClose size={20} />
              </button>
              <h2>Fazer login</h2>
              <form>
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Senha" />
              </form>
              <a href="#">Esqueci minha senha...</a>
              <Link className="login-btn-link" to={"/home"}>
                <button className="login">Entrar</button>
              </Link>
              <a className="create-account" href="#">
                Criar conta
              </a>
            </ModalContent>
          </ModalStyle>
        </Modal>
      </header>
    </Container>
  );
}

export default LandingHeader;
