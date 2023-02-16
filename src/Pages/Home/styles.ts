import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

export const AvatarArea = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const SelectIntegrant = styled.div`
  margin-top: 20%;

  p {
    color: var(--paragraph);
    user-select: none;
  }
`;
