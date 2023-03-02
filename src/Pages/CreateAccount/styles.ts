import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
export const Banner = styled.div`
  width: 40%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    z-index: 10;
    font-size: 4rem;
  }

  span {
    color: white;
  }

  .lens {
    background-color: var(--brand-green);
    background-size: cover;
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.5;
  }

  .image {
    background-image: url("https://images.pexels.com/photos/4009024/pexels-photo-4009024.jpeg");
    background-size: cover;
    background-position: 55%;
    transform: scaleX(-1);
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.5;
  }
`;
export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 10rem;
  gap: 1rem;

  .form-input-area {
    position: relative;
    max-width: 50%;
    width: 100%;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid black;
    border-radius: 8px;
    background-color: transparent;
  }

  label {
    font-weight: 600;
    font-size: 0.8rem;
    position: absolute;
    z-index: 1;
    left: 2em;
    top: -0.4rem;
    background-color: white;
    padding: 0 5px;
  }

  h2 {
    width: 50%;
    font-size: 2rem;
    max-width: 70%;
    text-align: center;
    margin-bottom: 5rem;
  }

  .submit-btn {
    align-self: center;
    text-align: center;
    text-decoration: none;
    background-color: var(--brand-green);
    border: 0;
    margin-top: 2rem;
    width: 100%;
    max-width: 243px;
    padding-block: 1rem;
    border-radius: 10px;
    color: white;
    font-weight: 700;
    font-size: 1.25rem;
    transition: 0.2s;

    &:hover {
      background-color: var(--brand-green-hover);
    }
  }
`;
