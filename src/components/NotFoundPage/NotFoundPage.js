import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="content-container">
      <div className="card">
        <h1>404 - Not Found</h1>
        <Link to="/index.html">Go Back Home</Link>
      </div>
    </div>
  )
};

export default NotFoundPage;