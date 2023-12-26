interface weekDay {
  day: string;
  hours: string;
}

const WeekDay = ({ day, hours }: weekDay) => {
  return (
    <div className="flex min-w-52 items-center justify-between gap-5">
      <p>{day}</p>
      <p>{hours}</p>
    </div>
  );
};

export default WeekDay;
