const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      {name}: {number}
      <button type="submit" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
