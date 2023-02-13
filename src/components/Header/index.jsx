import { AiOutlineUserAdd } from "react-icons/ai";
import { MdPostAdd } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { useState } from "react";
import { Container } from "./styles";

function Header() {
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
        <div className="buttons-area">
          <button className="header-btn green">
            <AiOutlineUserAdd size={24} />
          </button>
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
