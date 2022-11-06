import styled from "styled-components";
import Form from "./components/Form.jsx";
// import Userslist from "./components/userslist";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Userslist = lazy(() => import("./components/userslist"));
const Counter = lazy(() => import("./components/counter"));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/dato" element={<Userslist />} />
      </Routes>
    </Suspense>
  );
}

export default App;
