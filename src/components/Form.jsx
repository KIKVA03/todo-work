import styled from "styled-components";
import axios from "axios";
import Navigation from "./navigation";

const Form = () => {
    const onSubmit = (form) => {
        form.preventDefault();
        const [name, password, date] = form.target;

        const newUser = {
            userName: name.value,
            password: password.value,
            birthDate: date.value,
        };

        if (name.value && password.value && date.value) {
            axios.post(`https://63542660e64783fa828038c7.mockapi.io/api/users`, newUser);
            name.value = "";
            password.value = "";
            date.value = "";
        } else alert("fill all 3");
    };

    return (
        <Container>
            <Navigation />
            <form onSubmit={onSubmit}>
                <label htmlFor="name">User name</label>
                <input id="name" type="text" />

                <label htmlFor="pass">User password</label>
                <input id="pass" type="password" />

                <label htmlFor="date">Birth Date</label>
                <input id="date" type="date" />

                <div>
                    <button>Submit</button>
                </div>
            </form>
        </Container>
    );
};

export default Form;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 20%;
    }
`;
