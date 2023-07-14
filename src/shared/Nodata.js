import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Alert } from 'react-bootstrap';

const Nodata = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Alert variant="info">
        <FontAwesomeIcon   icon={faExclamationCircle} size="2x" />
        <p>No records found.</p>
      </Alert>
    </div>

  )
}

export default Nodata
