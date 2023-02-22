//api url
const API_URL = "https://api.adviceslip.com/advice";

//set elements
const adviceId = document.getElementById("advice-id");
const adviceContent = document.getElementById("advice-content");

//show the first advice
showAdvice();

/* function declarations */

//shows the advice
async function showAdvice() {
  //get advice from api
  let advice = await getAdvice();
  //update DOM elements
  adviceId.textContent = advice.slip.id;
  adviceContent.textContent = advice.slip.advice;
}

//gets the advice from api
async function getAdvice() {
  //use fetch to get the advice from the api
  let response = await fetch(API_URL);
  //convert the response from JSON to array and return it
  return JSON.parse(await response.text());
}
