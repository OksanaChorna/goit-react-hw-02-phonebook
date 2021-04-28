const ContactItem = ({ id, name, number }) => {
  return (
    <li>
      {name}: {number}
    </li>
  );
};

export default ContactItem;
