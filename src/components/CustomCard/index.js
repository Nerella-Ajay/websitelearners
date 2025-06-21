export const Card = ({ children, className = '' }) => {
  return <div className={`custom-card ${className}`}>{children}</div>;
};

export const CardHeader = ({ children, className = '' }) => {
  return <div className={`custom-card-header ${className}`}>{children}</div>;
};

export const CardTitle = ({ children, className = '' }) => {
  return <h3 className={`custom-card-title ${className}`}>{children}</h3>;
};

export const CardContent = ({ children, className = '' }) => {
  return <div className={`custom-card-content ${className}`}>{children}</div>;
};