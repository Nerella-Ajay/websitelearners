import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import CaretakerDashboard from './components/CaretakerDashboard';
import Header from './components/Header';
import Onboarding from './components/Onboarding';
import PatientDashboard from './components/PatientDashboard';

// This is the main App component that handles routing and initial state
function AppContent() {
  const [userRole, setUserRole] = useState(null); // State to store the user's selected role
  const navigate = useNavigate(); // Hook from react-router-dom to programmatically navigate

  const handleOnboardingComplete = (selectedUserType) => {
    console.log(`Onboarding complete! User is a: ${selectedUserType}`);
    setUserRole(selectedUserType); // Set the user's role in the state

    // Navigate to the appropriate dashboard based on the user type
    if (selectedUserType === 'patient') {
      navigate('/patient-dashboard');
    } else if (selectedUserType === 'caretaker') {
      navigate('/caretaker-dashboard');
    }
  };

  return (
    <div className="app-main-layout"> 
      {/* Conditionally render Onboarding or Dashboards */}
      {/* If userRole is null, show Onboarding. */}
      {userRole === null ? (
        <Onboarding onComplete={handleOnboardingComplete} />
      ) : (
        // If userRole is set, render the Header and then the appropriate Dashboard via Routes
        <>
          <Header /> {/* Header is now always visible once onboarding is done */}
          <div className="app-content-area"> {/* Wrap dashboard content for styling */}
            <Routes>
              {/* Ensure these paths match what your Onboarding navigates to */}
              <Route path="/patient-dashboard" element={<PatientDashboard />} />
              <Route path="/caretaker-dashboard" element={<CaretakerDashboard />} />
              {/* Redirect to the appropriate dashboard if userRole is set but path is root or unknown */}
              <Route path="/" element={userRole === 'patient' ? <PatientDashboard /> : <CaretakerDashboard />} />
              <Route path="*" element={<p style={{textAlign: 'center', marginTop: '50px', color: '#64748b'}}>Page Not Found.</p>} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

// We wrap AppContent with BrowserRouter in the main App component
// This is necessary for routing to work
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;