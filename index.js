const form = document.querySelector(".top-banner form");
 
form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;
});

const apiKey = "YOUR_OWN_KEY";
const inputVal = input.value;
 
...
 
const url =

...
 
 fetch(url)
  .then(response => response.json())
  .then(data => {
    // do stuff with the data
  })
  .catch(() => {
    msg.textContent = "Please search for a valid city 😩";
  });