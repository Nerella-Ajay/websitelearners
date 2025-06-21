import { format } from "date-fns";
import { Camera, Check, Clock, Image } from "lucide-react";
import { useRef, useState } from "react";

// Import your custom UI components
import { Badge } from "../CustomBadge"; // Assuming CustomBadge.js
import { Button } from "../CustomButton"; // Assuming CustomButton.js
import { Card, CardContent } from "../CustomCard"; // Assuming CustomCard.js

import './index.css'; // Keep the CSS for specific layout and colors

const MedicationTracker = ({ date, isTaken, onMarkTaken, isToday }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const dailyMedication = {
    name: "Daily Medication Set",
    time: "8:00 AM",
    description: "Complete set of daily tablets"
  };

  const handleImageSelect = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMarkTaken = () => {
    onMarkTaken(date, selectedImage || undefined);
    setSelectedImage(null);
    setImagePreview(null);
  };

  if (isTaken) {
    return (
      <div className="medication-tracker-container space-y-4">
        {/* Taken State: Success Message */}
        <div className="taken-success-box">
          <div className="taken-success-icon-wrapper">
            <Check className="taken-success-icon" />
          </div>
          <h3 className="taken-success-title">
            Medication Completed!
          </h3>
          <p className="taken-success-message">
            Great job! You've taken your medication for {format(new Date(date), 'MMMM d,EEEE')}.
          </p>
        </div>

        {/* Taken State: Medication Details Card */}
        <Card className="medication-details-card taken-card">
          <CardContent className="medication-details-content">
            <div className="medication-item-info">
              <div className="medication-item-icon-wrapper taken-icon-bg">
                <Check className="medication-item-icon" />
              </div>
              <div>
                <h4 className="medication-item-name taken-text-strong">{dailyMedication.name}</h4>
                <p className="medication-item-description taken-text-muted">{dailyMedication.description}</p>
              </div>
            </div>
            <Badge variant="secondary" className="medication-item-badge taken-badge">
              <Clock className="badge-icon" />
              {dailyMedication.time}
            </Badge>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="medication-tracker-container space-y-6">
      {/* Pending State: Medication Details Card */}
      <Card className="medication-details-card pending-card">
        <CardContent className="medication-details-content">
          <div className="medication-item-info">
            <div className="medication-item-number-wrapper">
              <span className="medication-item-number">1</span>
            </div>
            <div>
              <h4 className="medication-item-name">{dailyMedication.name}</h4>
              <p className="medication-item-description">{dailyMedication.description}</p>
            </div>
          </div>
          <Badge variant="outline" className="medication-item-badge pending-badge">
            <Clock className="badge-icon" />
            {dailyMedication.time}
          </Badge>
        </CardContent>
      </Card>

      {/* Image Upload Section */}
      <Card className="image-upload-card">
        <CardContent className="image-upload-content">
          <div className="text-center">
            <Image className="image-upload-icon" />
            <h3 className="image-upload-title">Add Proof Photo (Optional)</h3>
            <p className="image-upload-description">
              Take a photo of your medication or pill organizer as confirmation
            </p>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              ref={fileInputRef}
              className="file-input-hidden"
            />

            <Button
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              className="upload-photo-button"
            >
              <Camera className="upload-photo-icon" />
              {selectedImage ? "Change Photo" : "Take Photo"}
            </Button>

            {imagePreview && (
              <div className="image-preview-wrapper">
                <img
                  src={imagePreview}
                  alt="Medication proof"
                  className="image-preview"
                />
                <p className="image-preview-text">
                  Photo selected: {selectedImage?.name}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Mark as Taken Button */}
      <Button
        onClick={handleMarkTaken}
        className={`mark-taken-button ${!isToday ? 'mark-taken-button-disabled' : ''}`}
        disabled={!isToday}
      >
        <Check className="mark-taken-icon" />
        {isToday ? "Mark as Taken" : "Cannot mark future dates"}
      </Button>

      {!isToday && (
        <p className="future-date-message">
          You can only mark today's medication as taken
        </p>
      )}
    </div>
  );
};

export default MedicationTracker;