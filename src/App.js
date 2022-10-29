import styled from "styled-components";
import Form from "./components/Form.jsx";
// import Userslist from "./components/userslist";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Userslist = lazy(() => import("./components/userslist"));

function App() {
    return (
        <Container>
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    s
                    <Route path="/" element={<Form />} />
                    <Route path="dato" element={<Userslist />} />
                </Routes>
            </Suspense>
        </Container>
    );
}

export default App;

const Container = styled.div`
    display: flex;
    gap: 50px;
`;
