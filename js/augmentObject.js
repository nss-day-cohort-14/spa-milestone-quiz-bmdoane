var CarLot = ((originalCarLot) => {
  
  // getInventory() returns the objects
  // domCards() returns the elements
  originalCarLot.setColor = () => {
    var inventory = originalCarLot.getInventory();
    for (var i = 0; i < inventory.length; i++) {
      var cars = originalCarLot.domCards();
      cars[i].setAttribute(`style`, `border: 4px solid ${inventory[i].color}`);
    }
    console.log("cars", cars);
  }

// The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
// A car DOM element that was clicked on.
// A color name.
  // This function must accept two arguments
  originalCarLot.cardChange = (car, color) => {
    var inventory = originalCarLot.getInventory();
    var cars = originalCarLot.domCards();
    for (var i = 0; i < cars.length; i++) {
      cars[i].style = `border: 4px solid ${inventory[i].color}`;
      cars[i].classList.remove('change');
    }   
    car.style.border = `8px solid ${color}`;
    car.classList.add(`change`);
  }

  // originalCarLot.reset = () => {
  //   // for (var i = 0; i < cars.length; i++) {
  //   //   cars[i].classList.remove(`change`);
  //   console.log("click");
  // }

  return originalCarLot;

})(CarLot || {});
