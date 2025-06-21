import { User } from 'lucide-react';
import './index.css';

const PatientCard = ({ onSelect }) => {
  return (
    <div className="card patient-card" onClick={onSelect}>
      <div className="card-header">
        <div className="card-icon-wrapper patient-icon-bg">
          <User className="card-icon patient-icon" />
        </div>
        <h2 className="card-title patient-title">I'm a Patient</h2>
        <p className="card-description">
          Track your medication schedule and maintain your health records
        </p>
      </div>
      <div className="card-content">
        <ul className="feature-list">
          <li className="feature-item">
            <div className="bullet patient-bullet"></div>
            Mark medications as taken
          </li>
          <li className="feature-item">
            <div className="bullet patient-bullet"></div>
            Upload proof photos (optional)
          </li>
          <li className="feature-item">
            <div className="bullet patient-bullet"></div>
            View your medication calendar
          </li>
          <li className="feature-item">
            <div className="bullet patient-bullet"></div>
            Large, easy-to-use interface
          </li>
        </ul>
        <button
          className="button patient-button"
          onClick={(e) => { e.stopPropagation(); onSelect(); }}
        >
          Continue as Patient
        </button>
      </div>
    </div>
  );
};

export default PatientCard;