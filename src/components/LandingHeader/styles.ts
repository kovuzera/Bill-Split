import styled from "styled-components";

export const Container = styled.header`
  header {
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  h1 {
    font-size: 2.5rem;
  }

  button {
    position: absolute;
    right: 0;
    padding: 0.7rem 2rem;
    background-color: var(--brand-green);
    border-radius: 10px;
    border: none;
    transition: 0.2s;
    color: white;
    font-weight: 500;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  button:hover {
    background-color: var(--brand-green-hover);
  }
`;

export const ModalStyle = styled.form`
  width: 80%;
  h2 {
    font-size: 2rem;
  }

  .close-btn {
    line-height: 0;
    position: absolute;
    right: 1.5rem;
    background-color: transparent;
    border: 0;

    &:hover {
      color: var(--brand-green)
    }
  }

  p {
    font-size: 0.8rem;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    align-self: flex-start;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
    width: 100%;

    input {
      height: 2rem;
      border-radius: 10px;
      border: 1px solid lightgray;
      padding: 1rem;

      &:focus {
        outline: 2px solid var(--brand-green);
      }
    }
  }
  a {
    align-self: flex-end;
    font-size: .8rem;
    text-decoration: none;
    color: var(--title);

    &:hover {
      color: var(--brand-green)
    }
  }

  .create-account {
    align-self: center;
  }

  .login-btn-link {
    width: 100%;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
  }

  .login {
    align-self: center;
    background-color: var(--brand-green);
    border: 0;
    width: 100%;
    max-width: 243px;
    padding-block: 1rem;
    border-radius: 10px;
    color: white;
    font-weight: 700;
    font-size: 1.25rem;
    transition: .2s;
    
    &:hover {
      background-color: var(--brand-green-hover);
    }
  }


`;
