import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Navigation from "./navigation";

const Userslist = () => {
    const [usersList, setUsersList] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);

    useEffect(() => {
        axios
            .get(`https://63542660e64783fa828038c7.mockapi.io/api/users`)
            .then((res) => setUsersList(res.data));
    }, []);

    const getUser = (user) => {
        const selectedUser = {
            name: user.userName,
            password: user.password,
            birthDate: user.birthDate,
        };
        setSelectedUsers(selectedUser);
    };

    return (
        <Container>
            <Navigation />
            {usersList.map((user) => (
                <div className="userDataWrapper" key={user.id} onClick={() => getUser(user)}>
                    <h3>{user.userName}</h3>
                    <p>{user.password}</p>
                    <p>{user.birthDate}</p>
                    <p>{user.id}</p>
                </div>
            ))}

            <div className="selectedUser">
                <input type="text" value={selectedUsers.name} />
                <input type="password" value={selectedUsers.password} />
                <input type="date" value={selectedUsers.birthDate} />
                {/* <p>{selectedUsers.password}</p>
                <p>{selectedUsers.birthDate}</p> */}
            </div>
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
    .selectedUser {
        display: flex;
        flex-direction: column;
        gap: 10px;
`;
