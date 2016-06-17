var CarLot = ((originalCarLot) => {
  var carColors = document.getElementsByClassName(`card-border`);
  console.log("carColors", carColors);

  originalCarLot.activateEvents = () => {  
    

  }

  return originalCarLot;

})(CarLot || {});



// Put a border around the car information that matches the color of the car. To make this easier, set the color property value to an existing named CSS color.

// When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.

// Also, on click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.

// When you start typing into the navbar's text input, the description of the currently selected car should be bound to what you are typing in and match it exactly.