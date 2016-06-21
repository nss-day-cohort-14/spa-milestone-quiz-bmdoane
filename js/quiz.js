var CarLot = ((originalCarLot) => {

	function buildDOM(inventory) {
	  var carDisplay = document.getElementById(`cars-container`);
	  var inventoryString = ``;
	  var counter = 1;
	  var availability;

	  for (var i = 0; i < inventory.length; i++) {
	  	// Establish purchased value
	  	if (inventory[i].purchased === false) {
	  		availability = `On the lot!`;
	  	} else {
	  		availability = `Sold`;
	  	}
	  	// First iteration 0=0 row is created, then after 3rd card, row is created 
	  	if (i % 3 === 0) {
	  		inventoryString += `<div class='row'>`;
	  	}
	  		// Only = (not +=) on this string 
		  	inventoryString = `
		  	<div id='card--${counter}' class='car col-md-4 col-sm-12'>
		  		<p>${inventory[i].make}</p>
		  		<p>${inventory[i].model}</p>
		  		<p>${inventory[i].year}</p>
		  		<p>Price: $${inventory[i].price}</p>
		  		<p>Color: ${inventory[i].color}</p>
		  		<p>Availability: ${availability}</p>
		  		<p id='descrip--${counter}' class='description'>About: ${inventory[i].description}</p>
		  	</div>`;
		  	// Math here allows for end of row after 3rd iteration/card creation
		  	if ((i+1) % 3 === 0) {
		  		inventoryString += `</div>`;
		  	}

		  carDisplay.innerHTML += inventoryString;
		  counter++;

	  } // for loop

  	// Now that the DOM is loaded, establish all the event listeners needed
	  originalCarLot.activateEvents();

	} // buildDOM function

	// Load the inventory and send a callback function to be invoked after the process is complete, with the buildDOM function as the argument
	originalCarLot.loadInventory(buildDOM);

})(CarLot || {});