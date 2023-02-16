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
    padding: .8rem;
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

  .user {
    background-color: transparent;
    border: 1px solid transparent;
    color: var(--title);

    transition: 0.2s;

    &:hover {
      border: 1px solid var(--brand-green);
      color: var(--brand-green);
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
    margin-bottom: 2.5rem;
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

  .text-input + .text-input {
    margin-top: 1rem;
  }

  .text-input {
    height: 2rem;
    border-radius: 10px;
    border: 1px solid lightgray;
    padding: 1rem;

    &:focus {
      outline: 2px solid var(--brand-green);
    }
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  .file-input {
    display: none;
  }

  .file-label {
    padding: 1rem 2rem;
    width: fit-content;
    background-color: transparent;
    color: var(--brand-green);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 10px;
    cursor: pointer;
    border: 2px solid var(--brand-green);
    border-radius: 10px;
    align-self: center;
    transition: 0.2s;
    margin-block: 2rem 1rem;

    &:hover {
      color: white;
      background-color: var(--brand-green);
      border: 2px solid var(--brand-green);
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
    margin-top: 1rem;

    width: fit-content;
    align-self: center;
    padding: 0.8rem 4rem;

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
  p {
    font-size: 0.8rem;
    text-align: right;
    margin-top: 0.5rem;
  }

  h3 {
    text-align: center;
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  .integrants {
    width: fit-content;
    align-self: center;
    margin-top: 1rem;
  }
`;
