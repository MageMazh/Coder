import AddContact from "../AddContact";
import styles from "./Empty.module.css";
import PropTypes from "react";

function Empty(props) {
  const { contacts, setFilter, setContacts, click, setClick } = props;

  function handleNewContact(e) {
    e.preventDefault();
    setClick(true);
  }

  return (
    <>
      <button className={styles.dotBorder} onClick={handleNewContact}>
        Click here to add new contact
      </button>
      {click ? (
        <AddContact contacts={contacts} setFilter={setFilter} setContacts={setContacts} setClick={setClick}/>
      ) : (
        ""
      )}
    </>
  );
}

export default Empty;

Empty.propTypes = {
  contacts: PropTypes.object,
  setContacts: PropTypes.object,
  setFilter: PropTypes.object,
  click : PropTypes.bool,
  setClick : PropTypes.bool,
}