import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function Dashboard ()  {
  return (
    <div className='container mt-5'>
      {/* <h2>Dashboard</h2> */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-6">
           <Card>
            <Card.Body>
              <Card.Title>Total  Members</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
              <Card.Text>
              This is a a coalition of members contributions for this month.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated last week</small>
            </Card.Footer>
          </Card>
            </div>
            <div className="col-6">
              <Card>
              <Card.Body>
              <Card.Title>Total Contributions </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
              <Card.Text>
              This is a a coalition of all contributions for this month.
              </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">Last updated last month</small>
              </Card.Footer>
              </Card>
            </div>
          </div>
        </div>
      <nav>
        {/* <ul>
          <li>
            <Link to="/members">Members</Link>
          </li>
          <li>
            <Link to="/contributions">Contributions</Link>
          </li>
        </ul> */}
      </nav>
    </div>
  );
};

export default Dashboard;
