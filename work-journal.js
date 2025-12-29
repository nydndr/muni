// Getting input for the day
const journalForm = document.getElementById("journal-form");

journalForm.addEventListener("submit", (event) => {
  event.preventDefault();

  new FormData(journalForm);
});

journalForm.addEventListener("formdata", (event) => {
  const data = event.formData;

  for (const value of data.values()) {
    console.log(value);
  }
});
