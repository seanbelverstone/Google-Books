import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from "../../utils/API";
import "./style.css";

const RemoveModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const deleteTitle = props.deleteTitle;
  const deleteAuthor = props.deleteAuthor
  const bookDeleteId = props.bookDeleteId

//   This function deletes a book from the database
  const removeBook = () => {

	// Passes the unique ID through to the axios remove call in utils folder
	API.removeBook(bookDeleteId)
		  .then(res => {
			  console.log(res.data)
			//   Toggles the modal away, then refreshes the page
			  toggle();
			  window.location.reload();
		  })
		  .catch(err => console.log(err))
  }

  return (
    <div>
      <Button color="secondary" id="modalClose" onClick={toggle}>X</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
			Are you sure you'd like to remove {deleteTitle} by {deleteAuthor} from your favorites?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={removeBook}>Remove</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default RemoveModal;