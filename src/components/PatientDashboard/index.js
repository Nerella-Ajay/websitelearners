import { format, isBefore, isToday, startOfDay } from "date-fns";
import { Calendar as CalendarIcon, Check, User } from "lucide-react";
import { useState } from "react";

import { Calendar } from "../CustomCalendar";
import { Card, CardContent, CardHeader, CardTitle } from "../CustomCard";

import MedicationTracker from "../MedicationTracker";
import './index.css';

const PatientDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [takenDates, setTakenDates] = useState(new Set());

  const today = new Date();
  const todayStr = format(today, 'yyyy-MM-dd');
  const selectedDateStr = format(selectedDate, 'yyyy-MM-dd');
  const isTodaySelected = isToday(selectedDate);
  const isSelectedDateTaken = takenDates.has(selectedDateStr);

  const handleMarkTaken = (date, imageFile) => {
    setTakenDates(prev => new Set(prev).add(date));
    console.log('Medication marked as taken for:', date);
    if (imageFile) {
      console.log('Proof image uploaded:', imageFile.name);
    }
  };

  const getStreakCount = () => {
    let streak = 0;
    let currentDate = new Date(today);
    currentDate.setHours(0, 0, 0, 0); // Normalize to start of day

    // Check today first, then go backwards
    while (takenDates.has(format(currentDate, 'yyyy-MM-dd')) && streak < 30) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1); // Mutates, consider date-fns subDays
      // Better: currentDate = subDays(currentDate, 1);
    }

    return streak;
  };

  // Note: getDayClassName is no longer strictly needed if Calendar handles it via modifiersClassNames
  // We'll rely on the Calendar component's `modifiersClassNames` and `DayContent` props
  // to apply visual cues.

  return (
    <div className="patient-dashboard-container">
      {/* Welcome Section */}
      <div className="welcome-section-card">
        <div className="welcome-header">
          <div className="welcome-avatar-wrapper">
            <User className="welcome-avatar-icon" />
          </div>
          <div>
            <h2 className="welcome-title">Good {new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 18 ? 'Afternoon' : 'Evening'}!</h2>
            <p className="welcome-subtitle">Ready to stay on track with your medication?</p>
          </div>
        </div>

        <div className="welcome-stats-grid">
          <div className="stat-item">
            <div className="stat-value">{getStreakCount()}</div>
            <div className="stat-label">Day Streak</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{takenDates.has(todayStr) ? "✓" : "○"}</div>
            <div className="stat-label">Today's Status</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{Math.round((takenDates.size / 30) * 100)}%</div>
            <div className="stat-label">Monthly Rate</div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid-layout">
        {/* Today's Medication Card */}
        <div className="medication-section-wrapper">
          <Card className="dashboard-card h-fit">
            <CardHeader className="dashboard-card-header">
              <CardTitle className="dashboard-card-title dashboard-card-title-with-icon">
                <CalendarIcon className="dashboard-icon-blue" />
                {isTodaySelected ? "Today's Medication" : `Medication for ${format(selectedDate, 'MMMM d,EEEE')}`}
              </CardTitle>
            </CardHeader>
            <CardContent className="dashboard-card-content">
              <MedicationTracker
                date={selectedDateStr}
                isTaken={isSelectedDateTaken}
                onMarkTaken={handleMarkTaken}
                isToday={isTodaySelected}
              />
            </CardContent>
          </Card>
        </div>

        {/* Medication Calendar Card */}
        <div className="calendar-section-wrapper">
          <Card className="dashboard-card">
            <CardHeader className="dashboard-card-header">
              <CardTitle className="dashboard-card-title">Medication Calendar</CardTitle>
            </CardHeader>
            <CardContent className="dashboard-card-content">
              <Calendar
                mode="single" 
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                className="calendar-full-width" // Apply width 
                modifiersClassNames={{
                  selected: "custom-calendar-selected-day", 
                }}
                components={{
                  DayContent: ({ date }) => {
                    const dateStr = format(date, 'yyyy-MM-dd');
                    const isDateTaken = takenDates.has(dateStr);
                    const isDatePast = isBefore(date, startOfDay(today));
                    const isCurrentDay = isToday(date);

                    // These classes are for the *content inside* the day cell
                    // The Calendar component handles the main day cell styling based on `modifiersClassNames`
                    // and `is-today` class.
                    let contentClasses = "calendar-day-content-wrapper";
                    if (isCurrentDay) {
                        contentClasses += " is-current-day"; // Add a class for today's date content
                    }

                    return (
                      <div className={contentClasses}>
                        <span>{date.getDate()}</span>
                        {isDateTaken && (
                          <div className="calendar-dot-icon calendar-taken-dot">
                            <Check className="calendar-dot-check-icon" />
                          </div>
                        )}
                        {!isDateTaken && isDatePast && !isCurrentDay && (
                          <div className="calendar-dot-icon calendar-missed-dot"></div>
                        )}
                      </div>
                    );
                  }
                }}
              />

              {/* Calendar Legend */}
              <div className="calendar-legend-container">
                <div className="calendar-legend-item">
                  <div className="legend-color-box green-box"></div>
                  <span>Medication taken</span>
                </div>
                <div className="calendar-legend-item">
                  <div className="legend-color-box red-box"></div>
                  <span>Missed medication</span>
                </div>
                <div className="calendar-legend-item">
                  <div className="legend-color-box blue-box"></div>
                  <span>Today</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;