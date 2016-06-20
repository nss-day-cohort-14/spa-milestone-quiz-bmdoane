var CarLot = ((originalCarLot) => {
  
  // What is the difference between getInventory and domCards??
  // I think returning the objects vs. the elements
  originalCarLot.setColor = () => {
    var inventory = originalCarLot.getInventory();
    for (var i = 0; i < inventory.length; i++) {
      var cars = originalCarLot.domCards();
      cars[i].style.border = `4px solid ${inventory[i].color}`;
    }
 
  }
  // originalCarLot.reset = () => {
  //   // for (var i = 0; i < cars.length; i++) {
  //   //   cars[i].classList.remove(`change`);
  //   console.log("click");

  // }


// The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
// A car DOM element that was clicked on.
// A color name.
  // This function must accept two arguments
  originalCarLot.cardChange = (car, color) => {
    var cars = originalCarLot.domCards();
    //console.log("cars", cars);
    for (var i = 0; i < cars.length; i++) {
      cars[i].classList.remove('change');
    }
    //console.log("car", car);    
    car.classList.add('change');
  }

  originalCarLot.editText = () => {
    var cars = originalCarLot.domCards();
    console.log("cars", cars);
  }

  return originalCarLot;

})(CarLot || {});
