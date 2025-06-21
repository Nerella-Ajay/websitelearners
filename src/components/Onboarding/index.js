import { Heart } from 'lucide-react'; // Only Heart is needed here now
import './index.css';


import CaretakerCard from '../CaretakerCard';
import PatientCard from '../PatientCard';

const Onboarding = ({ onComplete }) => {
  return (
    <div className="onboarding-container">
      <div className="onboarding-content">
        <div className="onboarding-header">
          <div className="onboarding-icon-wrapper">
            <Heart className="onboarding-icon" />
          </div>
          <h1 className="onboarding-title">
            Welcome to MediCare Companion
          </h1>
          <p className="onboarding-description">
            Your trusted partner in medication management. Choose your role to get started with personalized features.
          </p>
        </div>

        <div className="role-selection-grid">
          {/* Patient Card component */}
          <PatientCard onSelect={() => onComplete('patient')} />
          {/* Caretaker Card component */}
          <CaretakerCard onSelect={() => onComplete('caretaker')} />
        </div>

        <div className="onboarding-footer">
          <p className="onboarding-switch-role-text">
            You can switch between roles anytime after setup
          </p>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;