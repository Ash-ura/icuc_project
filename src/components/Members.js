import React, { useState, useEffect } from 'react';
import { baseUrl } from '../api/api';
import Loader from '../shared/loader';
// import Nodata from '../shared/Nodata';
const Members = () => {
  const [members, setMembers] = useState([]);
  const [loading,setLoading] = useState(true);


  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await baseUrl.get('/members');
        setMembers(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className='container px-4'>
       {loading ? ( <Loader />) :(<>
      <h3 className='mt-4 '>Members</h3>
      <table className='table table-striped table-hover'>
        <thead className='table-dark'>
          <tr>
            <th>ID</th>
            <th>Other names</th>
            <th>Firstname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.othernames}</td>
              <td>{member.firstname}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>{member.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </>)}
    </div>
  );
};

export default Members;
