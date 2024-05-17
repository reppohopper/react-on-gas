import { useState, useEffect } from 'react';

if (typeof React === 'undefined') {
  var React = require('react');
}
if (typeof ReactDOM === 'undefined') {
  var ReactDOM = require('react-dom');
}

var gas;
if (window.gas) {
  gas = window.gas; // Use the global gas object if it exists
} else {
  gas = require("./mock_gas.js"); // Fallback to require in development
}


function App() {
  const [serverResponse, setServerResponse] = useState('Loading...');

  useEffect(() => {
    // Define the specification for the server call
    const spec = {
      funcName: 'get_some_string', // Replace with your actual server function name
      funcArgs: [], // Any arguments your server function needs
      onSuccess: function(data) {
        setServerResponse(`Complete: ${data}`);
      },
      onFailure: function(error) {
        setServerResponse(`Error: ${error}`);
      }
    };

    // Call the server function
    gas.run(spec);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{serverResponse}</p>
      </header>
    </div>
  );
}

export default App;
