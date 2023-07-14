import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('/members');
        setMembers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className='container px-4'>
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
              <td>{contribution.othernames}</td>
              <td>{contribution.firstname}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>{member.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
