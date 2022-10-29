import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
    return (
        <Container>
            <ul>
                <Link to="/">Form</Link>
                <Link to="dato">Users List</Link>
            </ul>
        </Container>
    );
};

export default Navigation;

const Container = styled.nav`
    background-color: lightgray;
    width: 100%;
    height: 40px;
    ul {
        display: flex;
        justify-content: space-evenly;
    }
`;
