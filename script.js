let myButton;
let bool = false;

function buttonClicked(parameter) {
  switch (parameter) {
    case "button-1":
      myButton = document.querySelector(".button-1");
      bool = "true";
      break;
    case "button-2":
      myButton = document.querySelector(".button-2");
      bool = "true";
      break;
    case "button-3":
      myButton = document.querySelector(".button-3");
      bool = "true";
      break;
    case "button-4":
      myButton = document.querySelector(".button-4");
      bool = "true";
      break;
    case "button-5":
      myButton = document.querySelector(".button-5");
      bool = "true";
      break;
  }

  let otherButtons = document.querySelectorAll(".button");
  otherButtons.forEach(
    (element) => (element.style.backgroundColor = "hsl(213, 7%, 30%)")
  );

  myButton.style.backgroundColor = "#8C7E85";
  myButton.style.color = "white";
}

/* Thank you part */

function deleteAll() {
  /* removing old content */
  let star = document.querySelector(".star");
  star.remove();
  let textContainer = document.querySelector(".text-container");
  textContainer.remove();
  let buttonsContainer = document.querySelector(".buttons-container");
  buttonsContainer.remove();
  let submitButton = document.querySelector(".submit");
  submitButton.remove();

  /* select main container */
  let container = document.querySelector(".main-container");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";

  /* inserting image */
  let ThankYouImage = document.createElement("img");
  ThankYouImage.setAttribute("src", "images/illustration-thank-you.svg");
  ThankYouImage.style.display = "flex";
  ThankYouImage.style.width = "180px";
  ThankYouImage.style.marginBottom = "30px";
  ThankYouImage.style.marginTop = "30px";

  /* inserting selection */
  let selectedOption = document.createElement("div");
  let selectedOptionText = document.createElement("p");
  if (bool) {
    selectedOptionText.textContent =
      "You selected " + myButton.textContent + " out of 5";
  } else {
    selectedOptionText.textContent = "You selected 0 out of 5";
  }
  selectedOptionText.style.color = "orange";
  selectedOption.style.backgroundColor = "hsl(216, 12%, 8%)";
  selectedOption.style.padding = "10px";
  selectedOption.style.borderRadius = "30px";
  selectedOption.style.marginBottom = "30px";

  /* inserting THANK YOU title */
  let ThankYouTitle = document.createElement("h1");
  ThankYouTitle.textContent = "Thank you!";
  ThankYouTitle.style.color = "white";
  ThankYouTitle.style.marginBottom = "25px";

  /* inserting thanks text */
  let ThankYouTextContainer = document.createElement("div");
  let ThankYouText = document.createElement("p");
  ThankYouText.textContent =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
  ThankYouText.style.color = "grey";
  ThankYouText.style.textAlign = "center";

  /* finalisation */
  container.appendChild(ThankYouImage);
  selectedOption.appendChild(selectedOptionText);
  container.appendChild(selectedOption);
  container.appendChild(ThankYouTitle);
  ThankYouTextContainer.appendChild(ThankYouText);
  container.appendChild(ThankYouTextContainer);
  document.body.appendChild(container);
}
