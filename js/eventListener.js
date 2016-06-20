var CarLot = ((originalCarLot) => {

  originalCarLot.domCards = () => {
    var cards = document.getElementsByClassName('car');
    return cards;
  }

  originalCarLot.activateEvents = () => { 
    originalCarLot.setColor(); 

    var inputEl = document.getElementById('user-input');
    // Why does the get inventory call not work?
    var cars = originalCarLot.domCards();
    // var cars = originalCarLot.getInventory();

    for (var i = 0; i < cars.length; i++) {
      cars[i].addEventListener('click', function(event) {
        console.log("event.currentTarget", event.currentTarget);
        var car = event.currentTarget;
        originalCarLot.cardChange(car);
        inputEl.focus();
        inputEl.value = "";
        originalCarLot.editText();

      });
    }

    inputEl.addEventListener('keyup', function(event) {
      
    });

    //document.getElementById(`resetBtn`).addEventListener(`click`, originalCarLot.reset);


  }

  return originalCarLot;

})(CarLot || {});


