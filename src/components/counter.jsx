import React from "react";
import Navigation from "./navigation";
import styled from "styled-components";

const Counter = () => {
    return (
        <Container>
            <Navigation />
            <div className="counter-wrapper">
                <h1>10</h1>
                <div className="buttons-wrapper">
                    <button>plus</button>
                    <button>minus</button>
                </div>
            </div>
        </Container>
    );
};

export default Counter;
const Container = styled.div`
    .counter-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        .buttons-wrapper {
            display: flex;
            gap: 20px;
            button {
                padding: 8px 15px;
            }
        }
    }
`;
