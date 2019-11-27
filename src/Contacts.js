import React from 'react';
import Contact from './Contact.js';
import NewContact from './NewContact.js';
import Alert from './Alert.js';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.newContact = this.newContact.bind(this);
        this.handleErrorClick = this.handleErrorClick.bind(this);
        this.state = {
            errorInfo: null,
            selectedContact: null,
            contacts: this.props.contacts
        };
    }

    handleEdit(contact) {
        this.setState(prevState => {
            const contacts = prevState.contacts;
            const pos = contacts.findIndex(c => c.name === contact.name);
            return {
                contacts: [...contacts.slice(0,pos), Object.assign({}, contact), ...contacts.slice(pos+1)],
                selectedContact: contact
            }
        })
    }

    handleErrorClick() {
        this.setState({
            errorInfo: null
        });
    }

    handleDelete(contact) {
        this.setState(prevState => {
            const contacts = prevState.contacts;
            const pos = contacts.findIndex(c => c.name === contact.name);
            return {
                contacts: [...contacts.slice(0,pos), ...contacts.slice(pos+1)],
            }
        });
    }

    newContact(contact) {
        this.setState(prevState => {
            const contacts = prevState.contacts;
            if (! contacts.find(c => c.name === contact.name)) {
                return ({
                    contacts: [...prevState.contacts, contact]
                });
            }

            return {
                errorInfo: 'Contact already exists'
            };
        });
    }

    render() {
        const selectedContact = this.state.selectedContact;
        const displayContact = selectedContact ? <div className="alert alert-primary">{selectedContact.name}</div> : ''

        return (
            <div>
                <Alert message={this.state.errorInfo} onClose={this.handleErrorClick}/>
                {displayContact}

                <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <NewContact onAddContact={this.newContact}/>
                {this.state.contacts.map((contact) => 
                    <Contact contact={contact} onDelete={this.handleDelete} onEdit={this.handleEdit} key={contact.name} />
                )}
                </table>
            </div>
        );
    }
}

export default Contacts