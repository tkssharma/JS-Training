
var printer = (function() {
  // IIFE block 
  var printerInstance;

  function create() {
    function print() {
      // underlying printer mechanics
    }
    return {
      turnOn: turnOn
    };
  }
  return {
    getInstance: function() {
      if (!printerInstance) {
        printerInstance = create();
      }
      return printerInstance;
    }
  };
})();
