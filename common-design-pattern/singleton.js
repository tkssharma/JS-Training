var printer = (function() {
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

  function Singleton() {
    if (!printerInstance) {
      printerInstance = intialize();
    }
  }
})();
