import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Home = () => {
    const { store } = useContext(Context);
    return (
        <>
            <h1>Contacts List</h1>
            <div className="container">
                <div className="row">
                    {
                        !!store.contacts &&
                        store.contacts.map((contact) => {
                            return (
                                <div className="col-md-4" key={contact.id}>
                                    <div className="card">
                                        <div className="card-header">
                                            { contact.name }
                                            <h6 class="card-subtitle mb-2 text-muted">{ contact.email ? contact.email : "sin email" }</h6>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">{ contact.phone }</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home;