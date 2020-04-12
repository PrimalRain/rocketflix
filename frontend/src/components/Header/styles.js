import styled from "styled-components";

export const RFHeader = styled.header`
  width: 100%;
  height: 80px;

  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const RFLogo = styled.img`
  width: 265px;
  ${"" /* height: 90px; */}

  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
