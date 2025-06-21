import { Children, cloneElement } from 'react';

export const Tabs = ({ value, onValueChange, children, className = '' }) => {
  const tabsList = Children.toArray(children).find(
    child => child.type === TabsList
  );
  const tabsContent = Children.toArray(children).filter(
    child => child.type === TabsContent
  );

  const modifiedTabsList = tabsList ? cloneElement(tabsList, {
    activeTab: value,
    onTabClick: onValueChange,
  }) : null;

  return (
    <div className={`custom-tabs ${className}`}>
      {modifiedTabsList}
      {tabsContent.map(content =>
        cloneElement(content, {
          isActive: content.props.value === value,
        })
      )}
    </div>
  );
};

export const TabsList = ({ children, activeTab, onTabClick, className = '' }) => {
  return (
    <div className={`custom-tabs-list ${className}`}>
      {Children.map(children, child =>
        cloneElement(child, {
          onClick: () => onTabClick(child.props.value),
          isActive: child.props.value === activeTab,
        })
      )}
    </div>
  );
};

export const TabsTrigger = ({ children, value, onClick, isActive, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`custom-tabs-trigger ${isActive ? 'active' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ children, value, isActive, className = '' }) => {
  return isActive ? (
    <div className={`custom-tabs-content ${className}`}>
      {children}
    </div>
  ) : null;
};