import React from "react";
import styled from "styled-components";
import './App.css'
function Header(){
    return(

        <StyledHeader className="flex a-center j-between">
        <div className="header">
            <h4>Online Clipboard</h4>
            <h6>Effortlessly Synced: Your Online Clipboard Companion</h6>
        </div>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.header`
background-color: #000000;
color: #fff;
padding: 10px 20px;
position: fixed; /* Fixed position to keep the header at the top */
width: 100%; /* Full width of the viewport */
top: 0; /* Position at the top */
left: 0; /* Ensure it starts from the left-most corner */
z-index: 1000; /* Ensure the header is above other content */
`;
