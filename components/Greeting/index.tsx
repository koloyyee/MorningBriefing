import "./style.css";
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

function getTime(hours: number, day: Days): string {
  let greet: string = "";
  switch (true) {
    case hours < 12:
      greet = `Good ${day} Morning.`;
      break;
    case hours >= 12:
      greet = `Good ${day} Afternoon`;
      break;
    case hours > 18:
      greet = `Good ${day} Evening`;
      break;
  }
  return greet;
}

function Greetings() {
  const date = new Date();
  let today = date.getDay();
  let dayOfWeek = getToday(Days, today);
  let hours = date.getHours();

  let greet = getTime(hours, dayOfWeek);

  return (
    <div className="greetings">
      <img src="" alt="Logo" />
      <p>{greet}</p>
      <p>
        {date.getDate() > 10 ? date.getDate() : "0" + date.getDate()}/
        {date.getMonth() + 1}/{date.getFullYear()}
      </p>
    </div>
  );
}

export default Greetings;
