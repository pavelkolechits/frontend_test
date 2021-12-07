import "./date.scss";

export const Date = ({ date }) => {
  return (
    <div className="date_wrap">
      <div className="icons_calendar" />
      <span className="date">{date}</span>
    </div>
  );
};
