import Header from "../components/Header";
import './Landing.css'

function Landing() {
  return (
    <div className="container">
      <Header />
      <div className="welcome">
        <p>
          O <strong>bill  $plit</strong> é o organizador financeiro oficial para você que mora com
          família ou amigos. <br/>Dividir contas é comum e conosco essa parte da sua
          vida fica mais fácil!
        </p>
        <p>
          Clique no botão “login” no canto superior direito da tela para
          começar!
        </p>
      </div>
      <footer>
      <p>
      Aplicação criada por <strong>Giovanne Marrone</strong> e <strong>Djênifer Gurskas</strong> com o objetivo de simplificar o lar do brasileiro 💚💛.
      </p>
      </footer>
    </div>
  );
}

export default Landing;
