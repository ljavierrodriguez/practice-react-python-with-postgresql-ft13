const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            apiURL: 'https://5000-fuchsia-pheasant-vb4526bb.ws-us21.gitpod.io',
            contacts: null,
            contact: null,
        },
        actions: {
            getContacts: async (url) => {
                try {
                    const response = await fetch(url + '/api/contacts');
                    if (!response.ok) throw new Error('Error al consultar contactos');
                    const data = await response.json();

                    setStore({
                        contacts: data
                    })

                } catch (error) {
                    console.log(error)
                }
            },
            getContactById: async (url, id) => {
                try {
                    const response = await fetch(url + '/api/contacts/' + id);
                    if (!response.ok) throw new Error('Error al consultar el contacto');
                    const data = await response.json();

                    setStore({
                        contact: data
                    })

                } catch (error) {
                    console.log(error)
                }
            },
            updateContact: async (url, contact) => {
                try {
                    const response = await fetch(url + '/api/contacts/' + contact.id, {
                        method: 'PUT',
                        body: JSON.stringify(contact),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (!response.ok) throw new Error('Error al consultar el contacto');
                    const data = await response.json();

                    setStore({
                        contact: data
                    })

                    getActions().getContacts(url);

                } catch (error) {
                    console.log(error)
                }
            },
            handleChangeContact: e => {
                let { contact } = getStore();
                if (contact === null) contact = {};
                contact[e.target.id] = e.target.value;
                setStore({
                    contact: contact
                })
            },
            handleSubmitContact: e => {
                e.preventDefault();
                const { apiURL, contact } = getStore();
                const { updateContact } = getActions();
                if (contact.id) {
                    updateContact(apiURL, contact);
                } else {
                    // metodo para crear
                    console.log(contact);
                }
            },
            setContact: (contact) => {
                setStore({
                    contact
                })
            }
        }
    }
}

export default getState;