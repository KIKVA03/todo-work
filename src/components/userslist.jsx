import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Userslist = () => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        axios
            .get(`https://63542660e64783fa828038c7.mockapi.io/api/users`)
            .then((res) => setUsersList(res.data));
    }, []);

    return (
        <Container>
            {usersList.map((user) => (
                <div className="userDataWrapper" key={user.id}>
                    <h3>{user.userName}</h3>
                    <p>{user.password}</p>
                    <p>{user.birthDate}</p>
                </div>
            ))}
        </Container>
    );
};

export default Userslist;

const Container = styled.div`
    flex: 2;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;

    .userDataWrapper {
        padding: 16px;
        background-color: lightgray;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;
