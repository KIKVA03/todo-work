import styled from "styled-components";
import axios from "axios";

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
        <Container onSubmit={onSubmit}>
            <label htmlFor="name">User name</label>
            <input id="name" type="text" />

            <label htmlFor="pass">User password</label>
            <input id="pass" type="password" />

            <label htmlFor="date">Birth Date</label>
            <input id="date" type="date" />

            <div>
                <button>Submit</button>
            </div>
        </Container>
    );
};

export default Form;

const Container = styled.form`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
