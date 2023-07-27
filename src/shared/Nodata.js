import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Alert } from 'react-bootstrap';

const Nodata = () => {
  return (
    <div className="d-flex justify-content-center shadow  text-center card align-items-center">
      <div className='card-body py-5 my-4'>
      <Alert variant="">
        <FontAwesomeIcon   icon={faExclamationCircle} size="2x" />
        <h4 className='mb-0 pb-0'>No records found.</h4>
        <p> <small className='mt-0  text-muted'> Please try again later </small> </p>
      </Alert>

      </div>
    </div>

  )
}

export default Nodata
