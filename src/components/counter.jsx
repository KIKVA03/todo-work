import Navigation from "./navigation";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../redux/reducers/counter";

const Counter = () => {
  const initialCount = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <Container>
      <Navigation />
      <div className="counter-wrapper">
        <h1>{initialCount}</h1>
        <div className="buttons-wrapper">
          <button onClick={() => dispatch(increment(5))}>plus</button>
          <button onClick={() => dispatch(decrement(5))}>minus</button>
          <button onClick={() => dispatch(reset())}>reset</button>
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
