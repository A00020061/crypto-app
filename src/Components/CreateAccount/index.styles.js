import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #2c2f36;
  border-radius: 5px;
  width: fit-content;
  background-color: #ffaf2c;
`;
export const PTag = styled.p`
  padding: 13px 20px;
  font-size: 0.9rem;
  border-radius: 8px;
  color: rgba(255, 255, 255, 1);
  font-family: Arial, Helvetica, sans-serif;
  @media only screen and (max-width: 1200px) {
    padding: 13px 10px;
  }
`;
