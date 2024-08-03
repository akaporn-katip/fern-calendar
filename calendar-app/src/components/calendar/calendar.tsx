import { useState } from "react";

export default function Calendar(): JSX.Element {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date: Date): number => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date): number => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const isSunday = (date: Date): boolean => {
    return date.getDay() === 0;
  };

  const renderDays = (): JSX.Element[] => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const days: JSX.Element[] = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`}></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );
      const isSundayClass = isSunday(date) ? "text-sunday" : "";
      days.push(
        <div className={`${isSundayClass}`} key={i}>
          {i}
        </div>
      );
    }

    return days;
  };

  const changeMonth = (offset: number): void => {
    const newDate = new Date(
      currentDate.setMonth(currentDate.getMonth() + offset)
    );
    setCurrentDate(new Date(newDate));
  };

  const formatMonthYear = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      month: "numeric",
      year: "numeric",
    };
    const format = new Intl.DateTimeFormat("en-BG", options);
    const parts = format.formatToParts(date);

    const month = parts.find((part) => part.type === "month")?.value;
    const year = parts.find((part) => part.type === "year")?.value;

    return `${month}, ${year}`;
  };

  return (
    <div className="flex flex-col text-blue-100 gap-2 w-full">
      <div className="flex justify-between">
        <div>
          <button onClick={() => changeMonth(-1)}>{"-"}</button>
        </div>
        <h2 className="text-lg">{formatMonthYear(currentDate)}</h2>
        <div>
          <button onClick={() => changeMonth(1)}>{"-"}</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        <div className="text-sunday">Sun</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>Sat</div>

        {renderDays()}
      </div>
      <div className="flex justify-center text-lg pt-4">
        <span className="text-sm">Have a nice day!!</span>
      </div>
    </div>
  );
}
