import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../api/api';

const Contributions = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await baseUrl.get('/contributions');
        console.log('sd');
        setContributions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContributions();
  }, []);

  return (
    <div className='container px-4'>
      <h3 className='mt-4 '>Contributions</h3>
      <table className='table table-striped table-hover'>
        <thead className='table-dark'>
          <tr>
            <th>ID</th>
            <th>Other names</th>
            <th>Firstname</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {contributions.map((contribution) => (
            <tr key={contribution.id}>
              <td>{contribution.id}</td>
              <td>{contribution.othernames}</td>
              <td>{contribution.firstname}</td>
              <td>{contribution.amount}</td>
              <td>{contribution.contribution_type}</td>
              <td>{contribution.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contributions;
