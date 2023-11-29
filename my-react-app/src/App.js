import React, { useEffect, useState } from 'react';

function App() {
  // defining state variable to hold data received from server
  const [data, setData] = useState(null);

  // useEffect hook to fetch data when component mounts 
  useEffect(() => {
    //fetching data from endpoint
    fetch('/api/data')
      // response json
      .then((res) => res.json())
      // update data state
      .then((data) => setData(data.message))

      // catch and logging
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Node.js</h1>
        {data && <p>Message from the server: {data}</p>}
      </header>
    </div>
  );
}

export default App;
