export const Button = ({ children, onClick, className = '', variant = 'default' }) => {
  return (
    <button
      onClick={onClick}
      className={`custom-button custom-button-${variant} ${className}`}
    >
      {children}
    </button>
  );
};