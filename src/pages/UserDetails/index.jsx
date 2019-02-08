import React, { Component } from 'react';
import BasicInput from '../../components/BasicInput';
import BasicButton from '../../components/Button'
import BasicModal from '../../components/BasicModal';
import Center from '../../elements/Center';

const data = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    password: 'test@123',
    birthdate: '2010-01-01'
}

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: data,
            modalIsOpen: false,
            modalName: ''
        }
        this.dataLocal = localStorage.getItem("formData") !== null ? JSON.parse(localStorage.getItem("formData")) : [];
    }
    componentDidMount() {
        window.onbeforeunload = (e) => {
            return true;
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if ( JSON.stringify(data) === JSON.stringify(this.state.formData) ) {
            this.setState({ modalIsOpen: true, modalName: 'addDetails' })
            return
        }
        const formData = this.state.formData;
        this.dataLocal.push(formData);
        localStorage.setItem("formData", JSON.stringify(this.dataLocal));
        this.props.history.push("user-list")
    }
    handleInputChange = (e) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value,
            }
        });
    }
    onCancelSubmit = () => {
        if (JSON.stringify(data) !== JSON.stringify(this.state.formData)) {
            this.setState({ modalIsOpen: true, modalName: 'save' })
        } else {
            this.setState({ modalIsOpen: true, modalName: 'addDetails' })
        }
    }
    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }
    leavePage = () => {
        this.props.history.push('user-list')
    }
    render() {
        const { firstName, lastName, email, password, birthdate } = this.state.formData;
        return (
            <Center>
                <form onSubmit={this.handleSubmit}>
                    <BasicInput value={firstName} required label="First Name" name="firstName" onChange={this.handleInputChange} />
                    <BasicInput value={lastName} required label="Last Name" name="lastName" onChange={this.handleInputChange} />
                    <BasicInput value={email} required label="Email" name="email" onChange={this.handleInputChange} type="email" />
                    <BasicInput value={password} required label="Password" name="password" onChange={this.handleInputChange} type="password" />
                    <BasicInput value={birthdate} required label="Birth Date" name="birthdate" onChange={this.handleInputChange} type="date" />

                    <BasicButton type="submit" primary>Save</BasicButton>
                    <BasicButton type="button" danger onClick={this.onCancelSubmit} >Cancel</BasicButton>
                </form>
                {this.state.modalIsOpen && this.state.modalName === 'save' && (
                    <BasicModal title="Are you sure you like to leave the page? You have unsaved content left.">
                        <BasicButton type="submit" primary onClick={this.handleSubmit} >Save and leave</BasicButton>
                        <BasicButton type="button" danger onClick={this.leavePage} >Yes, leave the page</BasicButton>
                        <BasicButton type="button" primary onClick={this.closeModal}>Go Back</BasicButton>
                    </BasicModal>
                )}
                {this.state.modalIsOpen && this.state.modalName === 'addDetails' && (
                    <BasicModal title="You have not added any details, please fill the form.">
                        <BasicButton type="button" primary onClick={this.closeModal}>close</BasicButton>
                    </BasicModal>
                )}
            </Center>
        )
    }
}

export default UserDetails;