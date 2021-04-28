import ContactItem from './ContactsListItem';

const ContactsList = ({ findContact }) => {
  return (
    <ul>
      {findContact().map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};

export default ContactsList;
