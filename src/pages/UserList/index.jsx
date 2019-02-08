import React, { Component } from 'react';
import Table from '../../elements/Table';
import Td from '../../elements/Td';
import Th from '../../elements/Th';
import Tr from '../../elements/Tr';
import BasicButton from '../../components/Button'

class UserList extends Component {
    addUser = () => {
        this.props.history.push('user-details')
    }
    render() {
        const UserList = localStorage.getItem("formData") !== null ? JSON.parse(localStorage.getItem("formData")) : [];
        return (
            <div>
                <Table>
                    <thead>
                        <Tr>
                            <Th>Firstname</Th>
                            <Th>Lastname</Th>
                            <Th>Email</Th>
                            <Th>BirThdate</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {
                            UserList.map((list, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td>{list.firstName}</Td>
                                        <Td>{list.lastName}</Td>
                                        <Td>{list.email}</Td>
                                        <Td>{list.birthdate}</Td>
                                    </Tr>
                                )
                            })
                        }
                    </tbody>

                </Table>
                <BasicButton type="submit" primary onClick={this.addUser}>Add User</BasicButton>
            </div>
        )
    }
}
export default UserList;