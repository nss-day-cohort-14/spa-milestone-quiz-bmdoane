var CarLot = ((originalCarLot) => {
  var inventoryArray = [];

    originalCarLot.getInventory = () => {
      return inventoryArray;
    },

    originalCarLot.loadInventory = (callback) => {
      var inventoryRequest = new XMLHttpRequest();
      // Using the => (fat arrow), requires being explicit with JSON.parse(this.responseText)
      inventoryRequest.addEventListener(`load`, () => {
        var inventoryData = JSON.parse(inventoryRequest.responseText);

        inventoryArray = inventoryData.cars;
        //console.log("inventoryArray", inventoryArray);
        callback(inventoryArray);});

      inventoryRequest.addEventListener(`error`, () => {
        console.log(`An error occurred while transfering the inventoryData`);
      });

      inventoryRequest.open(`GET`, `inventory.json`);
      inventoryRequest.send();
    }

  return originalCarLot 
// Either existing or brand new object
})(CarLot || {});