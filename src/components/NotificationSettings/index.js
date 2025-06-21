import { Bell, Mail } from "lucide-react"; // lucide-react is still a dependency for icons
import { useState } from "react";

import './index.css';

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    emailAddress: "caretaker@example.com",
    reminderTime: "20:00", // 8 PM
    pushNotifications: true, // Not rendered in UI, but in state
    criticalAlerts: true,   // Not rendered in UI, but in state
    missedMedNotification: true,
    missedMedDelay: "2" // hours
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveSettings = () => {
    console.log("Notification settings saved:", settings);
    alert("Notification settings saved!");
    // Here you would typically send these settings to a backend API
  };

  return (
    <div className="notification-settings-container">
      {/* Card 1: Notification Preferences */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title card-title-with-icon">
            <Bell className="card-icon-blue" />
            Notification Preferences
          </h2>
        </div>
        <div className="card-content card-content-spacing">
          {/* Email Notifications */}
          <div className="setting-section">
            <div className="setting-item-header">
              <div className="setting-text-group">
                <label htmlFor="email-notifications-toggle" className="setting-label">Email Notifications</label>
                <p className="setting-description">
                  Receive medication alerts via email
                </p>
              </div>
              {/* Switch alternative: styled checkbox */}
              <label className="switch-container">
                <input
                  type="checkbox"
                  id="email-notifications-toggle"
                  checked={settings.emailNotifications}
                  onChange={(e) => handleSettingChange("emailNotifications", e.target.checked)}
                  className="switch-input"
                />
                <span className="switch-slider"></span>
              </label>
            </div>

            {settings.emailNotifications && (
              <div className="setting-details-indent">
                <div>
                  <label htmlFor="email-address-input" className="label-style">Email Address</label>
                  <input
                    id="email-address-input"
                    type="email"
                    value={settings.emailAddress}
                    onChange={e => handleSettingChange("emailAddress", e.target.value)}
                    className="input-field"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Separator alternative: <hr> tag */}
          <hr className="separator" />

          {/* Missed Medication Alerts */}
          <div className="setting-section">
            <div className="setting-item-header">
              <div className="setting-text-group">
                <label htmlFor="missed-med-toggle" className="setting-label">Missed Medication Alerts</label>
                <p className="setting-description">
                  Get notified when medication is not taken on time
                </p>
              </div>
              {/* Switch alternative: styled checkbox */}
              <label className="switch-container">
                <input
                  type="checkbox"
                  id="missed-med-toggle"
                  checked={settings.missedMedNotification}
                  onChange={(e) => handleSettingChange("missedMedNotification", e.target.checked)}
                  className="switch-input"
                />
                <span className="switch-slider"></span>
              </label>
            </div>

            {settings.missedMedNotification && (
              <div className="setting-details-indent">
                <div>
                  <label htmlFor="missed-delay-select" className="label-style">Alert me if medication isn't taken within</label>
                  {/* Select alternative: native <select> */}
                  <select
                    id="missed-delay-select"
                    value={settings.missedMedDelay}
                    onChange={e => handleSettingChange("missedMedDelay", e.target.value)}
                    className="select-field"
                  >
                    <option value="1">1 hour</option>
                    <option value="2">2 hours</option>
                    <option value="3">3 hours</option>
                    <option value="4">4 hours</option>
                    <option value="6">6 hours</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="reminder-time-input" className="label-style">Daily reminder time</label>
                  <input
                    id="reminder-time-input"
                    type="time"
                    value={settings.reminderTime}
                    onChange={e => handleSettingChange("reminderTime", e.target.value)}
                    className="input-field"
                  />
                  <p className="input-helper-text">
                    Time to check if today's medication was taken
                  </p>
                </div>
              </div>
            )}
          </div>


        </div>
      </div>

      {/* Card 2: Email Preview */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title card-title-with-icon">
            <Mail className="card-icon-green" />
            Email Preview
          </h2>
        </div>
        <div className="card-content">
          <div className="email-preview-box">
            <div className="email-preview-content">
              <div className="email-preview-subject">Subject: Medication Alert - Eleanor Thompson</div>
              <div className="email-preview-body">
                <p className="mb-paragraph">Hello,</p>
                <p className="mb-paragraph">
                  This is a reminder that Eleanor Thompson has not taken her medication today.
                </p>
                <p className="mb-paragraph">
                  Please check with her to ensure she takes her prescribed medication.
                </p>
                <p>
                  Current adherence rate: 85% (5-day streak)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="save-button-container">
        <button onClick={handleSaveSettings} className="save-button">
          Save Notification Settings
        </button>
      </div>
    </div>
  );
};

export default NotificationSettings;






