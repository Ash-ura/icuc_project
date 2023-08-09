import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const AddContributionModal = (props) => {
  const [newContribution, setNewContribution] = useState({
    firstname: '',
    othernames: '',
    amount: 0,
    contribution_type: '',
  });

  const [showM,setshowM] = useState(true)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContribution((prevContribution) => ({
      ...prevContribution,
      [name]: value,
    }));
  };

  const addContribution = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/contributions', newContribution);
      if (response.status === 201) {
        // closeModal();
        // fetchContributions();
        setNewContribution({
          firstname: '',
          othernames: '',
          amount: 0,
          contribution_type: '',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      show={showM}
      onHide={props.closeModal()}
      contentLabel="Add Contribution Modal"
    >
      <h2>Add Contribution</h2>
      <form onSubmit={addContribution}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstname"
          value={newContribution.firstname}
          onChange={handleInputChange}
        />

        <label>Other Names:</label>
        <input
          type="text"
          name="othernames"
          value={newContribution.othernames}
          onChange={handleInputChange}
        />

        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={newContribution.amount}
          onChange={handleInputChange}
        />

        <label>Type:</label>
        <input
          type="text"
          name="contribution_type"
          value={newContribution.contribution_type}
          onChange={handleInputChange}
        />

        <button type="submit">Add</button>
        <button onClick={props.closeModal()}>Cancel</button>
      </form>
    </Modal>
  );
};

export default AddContributionModal;
