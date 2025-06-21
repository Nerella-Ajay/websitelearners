import { Users } from 'lucide-react';
import './index.css';

const CaretakerCard = ({ onSelect }) => {
  return (
    <div className="card caretaker-card" onClick={onSelect}>
      <div className="card-header">
        <div className="card-icon-wrapper caretaker-icon-bg">
          <Users className="card-icon caretaker-icon" />
        </div>
        <h2 className="card-title caretaker-title">I'm a Caretaker</h2>
        <p className="card-description">
          Monitor and support your loved one's medication adherence
        </p>
      </div>
      <div className="card-content">
        <ul className="feature-list">
          <li className="feature-item">
            <div className="bullet caretaker-bullet"></div>
            Monitor medication compliance
          </li>
          <li className="feature-item">
            <div className="bullet caretaker-bullet"></div>
            Set up notification preferences
          </li>
          <li className="feature-item">
            <div className="bullet caretaker-bullet"></div>
            View detailed reports
          </li>
          <li className="feature-item">
            <div className="bullet caretaker-bullet"></div>
            Receive email alerts
          </li>
        </ul>
        <button
          className="button caretaker-button"
          onClick={(e) => { e.stopPropagation(); onSelect(); }}
        >
          Continue as Caretaker
        </button>
      </div>
    </div>
  );
};

export default CaretakerCard;