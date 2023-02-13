import styled from "styled-components";

export const Avatar = styled.button`
  line-height: 0;
  width: fit-content;
  border-radius: 100%;
  overflow: hidden;
  border: 2px solid transparent;
  transition: 0.2s;
  background-color: transparent;

  &:hover {
    border: 2px solid var(--brand-green);
    box-shadow: 0px 0px 10px var(--brand-green);
  }
  img {
    max-width: 4.5rem;
  }
`;
