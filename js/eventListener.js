var CarLot = ((originalCarLot) => {

  originalCarLot.domCards = () => {
    var cards = document.getElementsByClassName(`car`);
    return cards;
  }

  originalCarLot.activateEvents = () => { 
    originalCarLot.setColor(); 

    var inputEl = document.getElementById(`user-input`);
    var reset = document.getElementById(`resetBtn`);
    var cars = originalCarLot.domCards();
    var card;

    for (var i = 0; i < cars.length; i++) {
      cars[i].addEventListener(`click`, function(event) {
        card = event.currentTarget;
        originalCarLot.cardChange(card, `darkorange`);
        inputEl.focus();
        inputEl.value = ``;
      });
    }

    inputEl.addEventListener(`keyup`, function(event) {
      var text = inputEl.value;
      var cardTextId = card.id.split(`--`)[1];
      console.log(`cardTextId`, cardTextId);
      var textToEdit = document.getElementById(`descrip--${cardTextId}`);
      textToEdit.innerHTML = text;
    });

    reset.addEventListener(`click`, function(event) {
      originalCarLot.resetCard();
      inputEl.blur();
      inputEl.value = ``;
      reset.blur();
    });

  }

  return originalCarLot;

})(CarLot || {});


