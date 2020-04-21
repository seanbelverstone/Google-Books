import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from "../../utils/API";

const RemoveModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const deleteTitle = props.deleteTitle;
  const deleteAuthor = props.deleteAuthor
  const bookDeleteId = props.bookDeleteId

  const removeBook = () => {
	  console.log(bookDeleteId);
  }

  return (
    <div>
      <Button color="secondary" onClick={toggle}>X</Button>
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