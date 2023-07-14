import React, { useState, useEffect } from 'react';
import { baseUrl } from '../api/api';
import moment from 'moment';
import Loader from '../shared/loader';
import Nodata from '../shared/Nodata';

const Contributions = () => {
  const [contributions, setContributions] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await baseUrl.get('/contributions');
        console.log('sd');
        setContributions(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false)
      }
    };

    fetchContributions();
  }, []);

  return (
    <div className='container px-4'>
      {loading ? ( <Loader />) :(<><h3 className='mt-4 '>Contributions</h3>
      
      {contributions.length > 0 ? (
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
              <td>{moment(contribution.timestamp).format('MMMM Do YYYY') }</td>
            </tr>
          ))}
        </tbody>
      </table>
       ) : ( <Nodata />
       ) }
      </>
      
      )
      }
    </div>
  );
};

export default Contributions;
