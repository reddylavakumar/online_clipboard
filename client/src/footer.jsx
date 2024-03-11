import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <StyledFooter>
        <h6>© Lava kumar™</h6>
      </StyledFooter>
    </>
  );
}

export default Footer;

const StyledFooter = styled.header`
  background-color: #000000;
  font-style: italian;
  color: #fff;
  padding: 10px 20px;
  position: fixed; /* Fixed position to keep the header at the top */
  width: 100%; /* Full width of the viewport */
  bottom: 0; /* Position at the top */
  left: 0; /* Ensure it starts from the left-most corner */
  z-index: 1000; /* Ensure the header is above other content */
`;
