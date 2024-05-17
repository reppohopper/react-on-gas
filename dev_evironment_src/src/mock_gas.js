// mock_gas.js

const gas_funcs = {};

gas_funcs.get_some_string = function () {
  return "some string returned from mock_gas.js"
}

const gas = {
  // Mock functions...
  run: function(spec) {
    const { funcName, funcArgs, onSuccess, onFailure } = spec;

    // Simulate server lag
    setTimeout(() => {
      try {
        // Call the mock function and pass the result to onSuccess
        const result = gas_funcs[funcName](...funcArgs);
        onSuccess(result);
      } catch (error) {
        // Call onFailure in case of an error
        onFailure(error);
      }
    }, 1000); // Simulated lag of 1 second
  }

  
};

module.exports = gas;
