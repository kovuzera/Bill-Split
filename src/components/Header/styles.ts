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

  .buttons-area {
    position: absolute;
    right: 0;
    display: flex;
    gap: 1rem;
  }

  button {
    padding: 0.8rem;
    border-radius: 100%;
    border: none;
    transition: 0.2s;
    color: white;
    font-weight: 500;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .green {
    background-color: var(--brand-green);

    &:hover {
      background-color: var(--brand-green-hover);
    }
  }
`;

export const ModalStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  h2 {
    font-size: 1.5rem;
    text-align: center;
  }

  .close-btn {
    line-height: 0;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    background-color: transparent;
    border: 0;

    &:hover {
      color: var(--brand-green);
    }
  }

  input {
    height: 2rem;
    border-radius: 10px;
    border: 1px solid lightgray;
    padding: 1rem;
    margin-block: 3rem 2rem;

    &:focus {
      outline: 2px solid var(--brand-green);
    }
  }

  .send-photo {
    width: fit-content;
    align-self: center;
    padding: 1rem 2rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    color: var(--brand-green);
    font-weight: 700;

    background-color: transparent;
    border: 2px solid var(--brand-green);
    border-radius: 10px;

    transition: 0.2s;

    &:hover {
      color: white;
      border: 2px solid var(--brand-green);
      background-color: var(--brand-green);
    }
  }
  .send {
    margin-top: 2rem;

    width: fit-content;
    align-self: center;
    padding: .8rem 4rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    color: white;
    font-weight: 700;
    font-size: 1.2rem;

    background-color: var(--brand-green);
    border: none;
    border-radius: 10px;

    transition: 0.2s;

    &:hover {
      background-color: var(--brand-green-hover);
    }
  }
`;
