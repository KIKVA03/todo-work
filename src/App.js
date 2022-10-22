import styled from "styled-components";
import Form from "./components/Form.jsx";
import Userslist from "./components/userslist";

function App() {
    return (
        <Container>
            <Form />
            <Userslist />
        </Container>
    );
}

export default App;

const Container = styled.div`
    display: flex;
    gap: 50px;
`;
