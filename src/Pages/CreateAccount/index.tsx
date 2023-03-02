import { Container, Banner, Form } from "./styles";

import React from "react";
import { Link } from "react-router-dom";
export function CreateAccount() {
  return (
    <>
      <Container>
        <Banner>
          <h1>
            bill<span>$</span>plit
          </h1>
          <div className="lens"></div>
          <div className="image"></div>
        </Banner>
        <Form>
          <h2>Comece a organizar a sua vida financeira coletiva!</h2>
          <div className="form-input-area">
            <label htmlFor="new-user-name">Como quer ser chamado(a)</label>
            <input name="new-user-name" type="text" />
          </div>
          <div className="form-input-area">
            <label htmlFor="email">E-mail</label>
            <input name="email" type="email" />
          </div>
          <div className="form-input-area">
            <label htmlFor="confirm-email">Confirmar e-mail</label>
            <input name="confirm-email" type="email" />
          </div>
          <div className="form-input-area">
            <label htmlFor="password">Senha</label>
            <input name="password" type="password" />
          </div>
          <div className="form-input-area">
            <label htmlFor="confirm-password">Confirmar senha</label>
            <input name="confirm-password" type="password" />
          </div>
          <Link className="submit-btn" to={"/"}>
            Finalizar
          </Link>
        </Form>
      </Container>
    </>
  );
}
