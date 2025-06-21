import { format, isBefore, isToday, startOfDay } from "date-fns";
import { AlertTriangle, Bell, Calendar as CalendarIcon, Camera, Check, Clock, Mail, Users } from "lucide-react";
import { useState } from "react";
import NotificationSettings from "../NotificationSettings";

import { Badge } from "../CustomBadge";
import { Button } from "../CustomButton";
import { Calendar } from "../CustomCalendar";
import { Card, CardContent, CardHeader, CardTitle } from "../CustomCard";
import { Progress } from "../CustomProgress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../CustomTabs";

import './index.css';

const CaretakerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Mock data for demonstration
  const patientName = "Eleanor Thompson";
  const adherenceRate = 85;
  const currentStreak = 5;
  const missedDoses = 3;

  // Mock data for taken medications (same as in PatientDashboard)
  const takenDates = new Set([
    "2024-06-10", "2024-06-09", "2024-06-07", "2024-06-06",
    "2024-06-05", "2024-06-04", "2024-06-02", "2024-06-01"
  ]);

  const recentActivity = [
    { date: "2024-06-10", taken: true, time: "8:30 AM", hasPhoto: true },
    { date: "2024-06-09", taken: true, time: "8:15 AM", hasPhoto: false },
    { date: "2024-06-08", taken: false, time: null, hasPhoto: false },
    { date: "2024-06-07", taken: true, time: "8:45 AM", hasPhoto: true },
    { date: "2024-06-06", taken: true, time: "8:20 AM", hasPhoto: false },
  ];

  const dailyMedication = {
    name: "Daily Medication Set",
    time: "8:00 AM",
    status: takenDates.has(format(new Date(), 'yyyy-MM-dd')) ? "completed" : "pending"
  };

  const handleSendReminderEmail = () => {
    console.log("Sending reminder email to patient...");
    alert("Reminder email sent to " + patientName);
  };

  const handleConfigureNotifications = () => {
    setActiveTab("notifications");
  };

  const handleViewCalendar = () => {
    setActiveTab("calendar");
  };

  return (
    <div className="caretaker-dashboard-layout">
      {/* Header Section */}
      <div className="dashboard-header-bg">
        <div className="dashboard-header-content">
          <div className="dashboard-header-icon-wrapper">
            <Users className="dashboard-header-icon" />
          </div>
          <div>
            <h2 className="dashboard-title">Caretaker Dashboard</h2>
            <p className="dashboard-subtitle">Monitoring {patientName}'s medication adherence</p>
          </div>
        </div>

        <div className="dashboard-stats-grid">
          <div className="dashboard-stat-card">
            <div className="stat-value">{adherenceRate}%</div>
            <div className="stat-label">Adherence Rate</div>
          </div>
          <div className="dashboard-stat-card">
            <div className="stat-value">{currentStreak}</div>
            <div className="stat-label">Current Streak</div>
          </div>
          <div className="dashboard-stat-card">
            <div className="stat-value">{missedDoses}</div>
            <div className="stat-label">Missed This Month</div>
          </div>
          <div className="dashboard-stat-card">
            <div className="stat-value">{recentActivity.filter(a => a.taken).length}</div>
            <div className="stat-label">Taken This Week</div>
          </div>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="dashboard-tabs">
        <TabsList className="dashboard-tabs-list">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="dashboard-tab-content">
          <div className="dashboard-overview-grid">
            {/* Today's Status */}
            <Card>
              <CardHeader>
                <CardTitle className="card-title-with-icon">
                  <CalendarIcon className="card-icon-blue" />
                  Today's Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="daily-medication-status">
                  <div>
                    <h4 className="medication-name">{dailyMedication.name}</h4>
                    <p className="medication-time">{dailyMedication.time}</p>
                  </div>
                  <Badge variant={dailyMedication.status === "pending" ? "destructive" : "secondary"}>
                    {dailyMedication.status === "pending" ? "Pending" : "Completed"}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="quick-actions-content">
                <Button
                  className="quick-action-button"
                  variant="outline"
                  onClick={handleSendReminderEmail}
                >
                  <Mail className="button-icon-mr" />
                  Send Reminder Email
                </Button>
                <Button
                  className="quick-action-button"
                  variant="outline"
                  onClick={handleConfigureNotifications}
                >
                  <Bell className="button-icon-mr" />
                  Configure Notifications
                </Button>
                <Button
                  className="quick-action-button"
                  variant="outline"
                  onClick={handleViewCalendar}
                >
                  <CalendarIcon className="button-icon-mr" />
                  View Full Calendar
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Adherence Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Adherence Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="progress-section">
                <div className="progress-header">
                  <span>Overall Progress</span>
                  <span>{adherenceRate}%</span>
                </div>
                <Progress value={adherenceRate} className="progress-bar-thin" />
                <div className="progress-stats-grid">
                  <div>
                    <div className="stat-value-green">22 days</div>
                    <div className="stat-label-muted">Taken</div>
                  </div>
                  <div>
                    <div className="stat-value-red">3 days</div>
                    <div className="stat-label-muted">Missed</div>
                  </div>
                  <div>
                    <div className="stat-value-blue">5 days</div>
                    <div className="stat-label-muted">Remaining</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="dashboard-tab-content">
          <Card>
            <CardHeader>
              <CardTitle>Recent Medication Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="activity-list">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="activity-item">
                    <div className="activity-item-left">
                      <div className={`activity-icon-wrapper ${
                        activity.taken ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {activity.taken ? (
                          <Check className="activity-icon-green" />
                        ) : (
                          <AlertTriangle className="activity-icon-red" /> 
                        )}
                      </div>
                      <div>
                        <p className="activity-date">
                          {format(new Date(activity.date), 'EEEE, MMMM d')}
                        </p>
                        <p className="activity-time-status">
                          {activity.taken ? `Taken at ${activity.time}` : 'Medication missed'}
                        </p>
                      </div>
                    </div>
                    <div className="activity-badges">
                      {activity.hasPhoto && (
                        <Badge variant="outline">
                          <Camera className="badge-icon-mr" />
                          Photo
                        </Badge>
                      )}
                      <Badge variant={activity.taken ? "secondary" : "destructive"}>
                        {activity.taken ? "Completed" : "Missed"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="dashboard-tab-content">
          <Card>
            <CardHeader>
              <CardTitle>Medication Calendar Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="calendar-overview-grid">
                <div className="calendar-display-section">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => date && setSelectedDate(date)}
                    className="full-width-calendar"
                    modifiersClassNames={{
                      selected: "bg-blue-600 text-white hover:bg-blue-700",
                    }}
                    components={{
                      DayContent: ({ date }) => {
                        const dateStr = format(date, 'yyyy-MM-dd');
                        const isTaken = takenDates.has(dateStr);
                        const isPast = isBefore(date, startOfDay(new Date()));
                        const isCurrentDay = isToday(date);

                        return (
                          <div className="calendar-day-content-wrapper">
                            <span>{date.getDate()}</span>
                            {isTaken && (
                              <div className="calendar-taken-indicator">
                                <Check className="calendar-check-icon" />
                              </div>
                            )}
                            {!isTaken && isPast && !isCurrentDay && (
                              <div className="calendar-missed-indicator"></div>
                            )}
                          </div>
                        );
                      }
                    }}
                  />

                  <div className="calendar-legend">
                    <div className="calendar-legend-item">
                      <div className="legend-bullet-green"></div>
                      <span>Medication taken</span>
                    </div>
                    <div className="calendar-legend-item">
                      <div className="legend-bullet-red"></div>
                      <span>Missed medication</span>
                    </div>
                    <div className="calendar-legend-item">
                      <div className="legend-bullet-blue"></div>
                      <span>Today</span>
                    </div>
                  </div>
                </div>

                <div className="calendar-details-section">
                  <h4 className="calendar-details-title">
                    Details for {format(selectedDate, 'MMMM d, yyyy')}
                  </h4>

                  <div className="calendar-details-content">
                    {takenDates.has(format(selectedDate, 'yyyy-MM-dd')) ? (
                      <div className="details-card-taken">
                        <div className="details-card-header-icon">
                          <Check className="details-card-icon-green" />
                          <span className="details-card-title-green">Medication Taken</span>
                        </div>
                        <p className="details-card-description-green">
                          {patientName} successfully took their medication on this day.
                        </p>
                      </div>
                    ) : isBefore(selectedDate, startOfDay(new Date())) ? (
                      <div className="details-card-missed">
                        <div className="details-card-header-icon">
                          <AlertTriangle className="details-card-icon-red" />
                          <span className="details-card-title-red">Medication Missed</span>
                        </div>
                        <p className="details-card-description-red">
                          {patientName} did not take their medication on this day.
                        </p>
                      </div>
                    ) : isToday(selectedDate) ? (
                      <div className="details-card-today">
                        <div className="details-card-header-icon">
                          <Clock className="details-card-icon-blue" />
                          <span className="details-card-title-blue">Today</span>
                        </div>
                        <p className="details-card-description-blue">
                          Monitor {patientName}'s medication status for today.
                        </p>
                      </div>
                    ) : (
                      <div className="details-card-future">
                        <div className="details-card-header-icon">
                          <CalendarIcon className="details-card-icon-gray" />
                          <span className="details-card-title-gray">Future Date</span>
                        </div>
                        <p className="details-card-description-gray">
                          This date is in the future.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <NotificationSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CaretakerDashboard;