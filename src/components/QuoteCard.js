import React from 'react';
import './QuoteCard.css';

function QuoteCard({ citation }) {
  return (
    <div className="QuoteCard">
      <ul>
        <li> {citation.quote} </li>
        <li> {citation.character} </li>
        <img src={citation.image} alt={citation.character} />
      </ul>
    </div>
  );
}

export default QuoteCard;
