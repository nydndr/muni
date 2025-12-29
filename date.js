// Adding today date to header
const todayDateElement =
  document.getElementById("today-date");

const today = new Date();

todayDateElement.textContent = today.toLocaleDateString();
const todayStringOptions = {
  month: "long",
  day: "numeric",
};
todayDateElement.textContent = today.toLocaleDateString(
  undefined,
  todayStringOptions
);

// Adding day of the week to header
const weekDayElement = document.getElementById("week-day");
const weekDayStringOptions = { weekday: "long" };
weekDayElement.textContent = today.toLocaleDateString(
  undefined,
  weekDayStringOptions
);
