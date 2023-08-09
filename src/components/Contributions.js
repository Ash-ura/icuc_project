import React, { useState, useEffect } from 'react';
import { baseUrl } from '../api/api';
import moment from 'moment';
import Loader from '../shared/loader';
import Nodata from '../shared/Nodata';

const Contributions = () => {
  const [contributions, setContributions] = useState([]);
  const [searchInput, setSearchInput] = useState("");
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
  
  const searchContent = (e) =>{
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  if (searchInput.length > 0) {
    console.log(contributions);
    contributions.filter((data) => {
    return data.firstname.includes(searchInput)
}); 
}

  return (
    <div className='container px-4'>
      {loading ? ( <Loader />) :(<>
      <div className='card mt-5 rounded-5 mb-2 shadow'>
      <div className='card-body'>
        

      <div className='d-flex  align-items-center justify-content-between'>
      <h3 className='mt-4  '>Contributions</h3>
        <div className='d-flex align-items-center'>
          <input type='text' className='form-control mr-1'  onChange={searchContent} value={searchInput} placeholder='Search name...' />
          <button className='btn btn-outline-info text-nowrap '>
             New Contributions </button>
        </div>
      </div>
      </div></div>

      
      {contributions.length > 0 ? (
      <table className='table table-striped table-hover'>
        <thead className='table-dark'>
          <tr>
            <th>ID</th>
            <th>Name </th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {contributions.map((contribution,index) => (
            <tr key={contribution.id}>
              <td>{contribution.id}</td>
              <td>{contribution.firstname}   {contribution.othernames} </td>
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
