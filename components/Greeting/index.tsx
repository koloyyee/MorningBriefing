enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function getToday<T>(type: T, day: number): T[keyof T] {
  const casted = day as keyof T;
  return type[casted];
}

function Greetings() {
  const date = new Date();
  let today = date.getDay();
  let dayOfWeek = getToday(Days, today);

  return (
    <header className="greetings">
      <img src="" alt="Logo" />
      <h2>Welcome back</h2>
      <p>
        {dayOfWeek},{" "}
        {date.getDate() > 10 ? date.getDate() : "0" + date.getDate()}/
        {date.getMonth() + 1}/{date.getFullYear()}
      </p>
    </header>
  );
}

export default Greetings;
