import React from 'react';

// Subcomponent imports
import Colored from '../styles/Colored';

const { Card } = Colored;

export default function DirectLinks() {
  return (
    <Card className="card direct-links-card hidden">
      <div className="title-wrap">
        <i className="fa-solid fa-star star" />
        <h5 className="card-title">Direct Links</h5>
      </div>
      <p className="body card-body">
        {/*  */}
      </p>
    </Card>
  );
}
