export const Badge = ({ children, className = '', variant = 'default' }) => {
  return (
    <span className={`custom-badge custom-badge-${variant} ${className}`}>
      {children}
    </span>
  );
};