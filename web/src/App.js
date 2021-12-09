import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import injectContext from './store/appContext';
import ContactList from './views/admin/contacts';
import AddContact from './views/admin/contacts/add';
import EditContact from './views/admin/contacts/edit';
import Home from './views/Home';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/admin/contact/add" component={AddContact} />
                    <Route exact path="/admin/contact/:id/edit" component={EditContact} />
                    <Route exact path="/admin/contacts" component={ContactList} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default injectContext(App);