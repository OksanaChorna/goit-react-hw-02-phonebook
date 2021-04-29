import ContactItem from './ContactsListItem';

const ContactsList = ({ findContact, onDeleteContact }) => {
  return (
    <ul>
      {findContact().map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

export default ContactsList;
