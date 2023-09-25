const form = document.querySelector("#CardForm");

const cardNumber = document.querySelector("#card-number");
const cardName = document.querySelector("#card-name");
const cardExpiration = document.querySelector("#valid-thru-date");
const cardExpirationYear = document.querySelector("#valid-thru-year");
const cardCVV = document.querySelector("#cvv-text");


const cardNumberText = document.querySelector(".number-v1");
const cardNameText = document.querySelector(".name-v1");
const cardExpirationText = document.querySelector(".expiration-v1");
const cardExpirationYearText = document.querySelector(".expiration-v2");
const cardCVVText = document.querySelector(".cvv-v1");

cardNumber.addEventListener("keyup", (e) => {
  if (!e.target.value) {
      cardNumberText.innerText = "1234 5678 9101 1121"
  } else {
      const valuesOfInput = e.target.value.replaceAll(" ", "");

      if (e.target.value.length > 14) {
          e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        //   regex pattern is used to create the number in 4 sequene and add space in between
        // Regex Pattern: A regular expression (regex) is a sequence of characters that defines a search pattern.
        //  It's a powerful tool for text processing and pattern matching. Regular expressions can be used to match,
        //   search, replace, or manipulate strings based on a specific pattern.
          cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
      } else if (e.target.value.length > 9) {
          e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
          cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
      } else if (e.target.value.length > 4) {
          e.target.value = valuesOfInput.replace(/(d{4})(\d{0,4})/, "$1 $2");
          cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");  
      } else {
          cardNumberText.innerHTML = valuesOfInput; 
      }

      if (e.target.value.length < 16) {
          // Set the input border color to red
          e.target.style.borderColor = "red";
      } else {
          // Set the input border color back to the default (or any desired color)
          e.target.style.borderColor = "green"; // Empty string sets it back to the default
      }
  }
})

cardName.addEventListener("keyup", (e) => {
  if (!e.target.value) {
      cardHolderText,innerHTML = "JANE APPLESEED";
  } else {
      cardNameText.innerHTML = e.target.value.toUpperCase();
  } if (e.target.value.length < 4) {
    e.target.style.borderColor = "red";
  } else {
    e.target.style.borderColor = "green"
  }
})

cardExpiration.addEventListener("keyup", (e) => {
   if (!e.target.value) {
      cardExpirationText.innerHTML = "02/40"
   } else {
      const valuesOfInput = e.target.value.replace("/", "");

      if (e.target.value.length > 2) {
          e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
          cardExpirationText.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
      } else {
          cardExpirationText.innerHTML = valuesOfInput;
      }
   }
    if (e.target.value.length < 1) {
    e.target.style.borderColor = "red";
  } else {
    e.target.style.borderColor = "green"
  }
})

cardCVV.addEventListener("keyup", (e) => {
  if (!e.target.value) {
      cardCVVText.innerHTML = "0000";
  } else {
      cardCVVText.innerHTML = e.target.value;
  }
  if (e.target.value.length < 4) {
    e.target.style.borderColor = "red";
  } else {
    e.target.style.borderColor = "green"
  }
})


form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // Store the entered credit card details
    const enteredCardNumber = cardNumber.value;
    const enteredCardName = cardName.value;
    const enteredCardExpiration = cardExpiration.value;
    const enteredCardCVV = cardCVV.value;
  
    // Close the form
    form.style.display = "none";


     // Get the thank you message div by its ID
  const thankYouMessage = document.getElementById("thank-you-message");

  // Update the content of the existing div with the thank you message
  thankYouMessage.innerHTML = 'thank-you-message'

    // Display the thank you message
    thankYouMessage.style.display = "block";
})