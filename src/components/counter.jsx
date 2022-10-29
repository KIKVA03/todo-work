import { useReducer } from "react";
import Navigation from "./navigation";
import styled from "styled-components";

const Counter = () => {
    const initialState = { counter: 5 };
    const reducer = (state, action) => {
        switch (action.type) {
            case "increase": {
                return { ...state, counter: state.counter + action.payload };
            }
            case "decrease": {
                return { ...state, counter: state.counter - action.payload };
            }
            default:
                throw new Error();
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Container>
            <Navigation />
            <div className="counter-wrapper">
                <h1>{state.counter}</h1>
                <div className="buttons-wrapper">
                    <button onClick={() => dispatch({ type: "increase", payload: 5 })}>plus</button>
                    <button onClick={() => dispatch({ type: "decrease", payload: 5 })}>
                        minus
                    </button>
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
