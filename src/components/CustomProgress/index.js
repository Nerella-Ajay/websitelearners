export const Progress = ({ value, className = '' }) => {
  return (
    <div className={`custom-progress ${className}`}>
      <div
        className="custom-progress-indicator"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};