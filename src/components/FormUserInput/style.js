import styled from "styled-components";

export const Label = styled.label``;

export const ContainerInput = styled.div`
  position: relative;
  margin: 1rem 0 1.7rem 0;
`;

export const Input = styled.input`
  box-sizing: border-box;
  border-radius: 5px;
  width: 300px;
  height: 3.5rem;
  font-size: 1rem;
  padding-left: 0.5rem;
  background-color: #e8f0fe;
  border: 2px solid ${({ error }) => (error ? "red" : "#b7bfcc")};
  padding-top: 0.3rem;
`;

export const Span = styled.span`
  transition: 0.2s;
  position: absolute;
  top: ${({ activeInput }) => (activeInput ? "12px" : "50%")};
  left: 0.8rem;
  transform: translateY(-50%);
  color: ${({ error }) => (error ? "red" : "#252525")};

  font-size: ${({ activeInput }) => (activeInput ? ".8rem" : "1rem")};
  font-family: "Roboto", sans-serif;
`;

export const MessageError = styled.p`
  position: absolute;
  color: red;
  left: 0.5rem;
  bottom: -2.1rem;
  font-size: 0.875rem;
`;
