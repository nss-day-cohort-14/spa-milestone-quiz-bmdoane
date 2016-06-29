var CarLot = ((originalCarLot) => {
  
  // getInventory() returns the objects
  // domCards() returns the elements
  originalCarLot.setColor = () => {
    var inventory = originalCarLot.getInventory();
    for (var i = 0; i < inventory.length; i++) {
      var cars = originalCarLot.domCards();
      cars[i].setAttribute(`style`, `border: 4px solid ${inventory[i].color}`);
    }
  }

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

  originalCarLot.resetCard = () => {
    var inventory = originalCarLot.getInventory();
    var cars = originalCarLot.domCards();   
    for (var i = 0; i < cars.length; i++) {
      cars[i].style = `border: 4px solid ${inventory[i].color}`;
      cars[i].classList.remove(`change`);
    }
  }

  return originalCarLot;

})(CarLot || {});
