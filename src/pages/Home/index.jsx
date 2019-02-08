import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import H1 from '../../elements/H1';
import Center from '../../elements/Center';

class Home extends Component {
    render(){
        return(
            <Center>
                <Link to="/user-list">User List</Link>
                <Link to="/file-upload">File Upload</Link>
            </Center>
        )
    }
}
export default Home;