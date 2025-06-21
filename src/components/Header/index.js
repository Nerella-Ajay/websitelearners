import { User, Users } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';

const Header = () => {
  const companyName = "Medicare Companion";
  const avatarLetter = companyName.charAt(0).toUpperCase();

  const location = useLocation();
  const navigate = useNavigate();

  const isCaretakerDashboard = location.pathname === '/caretaker-dashboard';
  const isPatientDashboard = location.pathname === '/patient-dashboard';

  const medicareDashboard = isCaretakerDashboard ? 'Caretaker View' : 'Patient View';

  const showSwitchButton = isCaretakerDashboard || isPatientDashboard;

  const handleButtonClick = () => {
    if (isCaretakerDashboard) {
      navigate('/patient-dashboard');
    } else if (isPatientDashboard) {
      navigate('/caretaker-dashboard');
    }
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <div className="company-avatar">
          {avatarLetter}
        </div>
        <div className='companyname-alignment'>
          <h1 className="company-name">{companyName}</h1>
          <p className="medicare-dashboard-view">{medicareDashboard}</p> {/* Added class for styling */}
        </div>
      </div>
      <div className="header-right">
        {showSwitchButton && (
          <button className="switch-dashboard-button" onClick={handleButtonClick}>
            {/* Render icon and text directly inside the button */}
            {isCaretakerDashboard ? (
              <> {/* Use a React Fragment to group multiple elements */}
                <User className="card-icon patient-icon" /> {/* Icon for Patient */}
                <span>Switch to Patient</span>
              </>
            ) : (
              <> {/* Use a React Fragment to group multiple elements */}
                <Users className="card-icon caretaker-icon" /> {/* Icon for Caretaker */}
                <span>Switch to Caretaker</span>
              </>
            )}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;