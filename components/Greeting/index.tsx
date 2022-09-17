/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */
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

/**
 *
 * @param {T} type - generic type
 * @param {number} day - get day number wit
 * @return {string}
 */
function getToday<T>(type: T, day: number): T[keyof T] {
  const casted = day as keyof T;
  return type[casted];
}
/**
 *
 * @param {number} hours - JS Date hour.
 * @param {Days} day - get from getToday
 * @return {string}
 */
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
/**
 *
 * @return {HTMLElement} Greeting - React Component
 */
function Greetings() {
  const date = new Date();
  const today = date.getDay();
  const dayOfWeek = getToday(Days, today);
  const hours = date.getHours();

  const greet = getTime(hours, dayOfWeek);

  return (
    <div className="greetings header-item">
      <p>{greet}</p>
      <p>
        {date.getDate() > 10 ? date.getDate() : "0" + date.getDate()}/
        {date.getMonth() + 1}/{date.getFullYear()}
      </p>
    </div>
  );
}

export default Greetings;
