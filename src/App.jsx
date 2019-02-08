import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserDetails from './pages/UserDetails';
import Home from './pages/Home';
import UserList from './pages/UserList';
import FileUploads from './pages/FileUploads';

const App = () => (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/user-details" component={UserDetails} />
        <Route exact path="/user-list" component={UserList} />
        <Route exact path="/file-upload" component={FileUploads} />
      </>
    </Router>
)
export default App;
