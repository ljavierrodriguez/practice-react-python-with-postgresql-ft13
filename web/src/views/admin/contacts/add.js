import React, { useContext, useEffect } from 'react';
import { Context } from '../../../store/appContext';
import { useParams } from 'react-router-dom';

const AddContact = () => {
    const { store: { contact }, actions: { handleChangeContact, handleSubmitContact } } = useContext(Context);

    return (
        <>
            <h1>Add Contact</h1>
            <form style={{ width: '500px', margin: '0 auto' }} onSubmit={handleSubmitContact}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="John Doe"
                        value={contact && contact.name}
                        onChange={handleChangeContact}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Phone
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="+569XXXXXXXX"
                        value={contact && contact.phone}
                        onChange={handleChangeContact}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="john.doe@email.com"
                        value={contact && contact.email}
                        onChange={handleChangeContact}
                    />
                </div>
                <div className="mb-3 d-grid">
                    <button className="btn btn-primary gap-2">
                        Save
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddContact;