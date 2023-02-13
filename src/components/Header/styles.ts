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
