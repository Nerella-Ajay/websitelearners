import { addMonths, eachDayOfInterval, endOfMonth, format, isSameDay, startOfMonth, subMonths } from 'date-fns';
import { useMemo, useState } from 'react';

export const Calendar = ({
  mode, // 'single'
  selected,
  onSelect,
  className = '',
  modifiersClassNames = {},
  components = {},
}) => {
  const today = new Date();
  // State to manage the month currently displayed in the calendar
  const [displayMonth, setDisplayMonth] = useState(selected || today);

  const monthStart = startOfMonth(displayMonth); // Use displayMonth
  const monthEnd = endOfMonth(displayMonth);     // Use displayMonth

  const daysInMonth = useMemo(() => {
    return eachDayOfInterval({ start: monthStart, end: monthEnd });
  }, [monthStart, monthEnd]);

  // Create an array for the weekdays
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Calculate leading empty cells for the first week
  const firstDayOfMonth = monthStart.getDay(); // 0 for Sunday, 1 for Monday, etc.
  const leadingEmptyCells = Array.from({ length: firstDayOfMonth });

  const DayContent = components.DayContent || (({ date }) => <span>{date.getDate()}</span>);

  // Handlers for month navigation
  const handlePreviousMonth = () => {
    setDisplayMonth(prevMonth => subMonths(prevMonth, 1));
  };

  const handleNextMonth = () => {
    setDisplayMonth(prevMonth => addMonths(prevMonth, 1));
  };

  return (
    <div className={`custom-calendar ${className}`}>
      <div className="custom-calendar-header">
        <button onClick={handlePreviousMonth} className="custom-calendar-nav-button">
          &lt; {/* Left arrow character */}
        </button>
        <h4 className="custom-calendar-month-title">
          {format(displayMonth, 'MMMM yyyy')} {/* Format displayMonth */}
        </h4>
        <button onClick={handleNextMonth} className="custom-calendar-nav-button">
          &gt; {/* Right arrow character */}
        </button>
      </div>
      <div className="custom-calendar-grid">
        {weekdays.map(day => (
          <div key={day} className="custom-calendar-weekday">
            {day}
          </div>
        ))}
        {leadingEmptyCells.map((_, i) => (
          <div key={`empty-${i}`} className="custom-calendar-day empty"></div>
        ))}
        {daysInMonth.map(date => {
          const isSelected = selected && isSameDay(date, selected);
          const classNames = [
            'custom-calendar-day',
            isSelected ? modifiersClassNames.selected || 'is-selected' : '',
            isSameDay(date, today) ? 'is-today' : '',
          ].filter(Boolean).join(' ');

          return (
            <div
              key={format(date, 'yyyy-MM-dd')}
              className={classNames}
              onClick={() => onSelect && onSelect(date)}
            >
              <DayContent date={date} />
            </div>
          );
        })}
      </div>
    </div>
  );
};