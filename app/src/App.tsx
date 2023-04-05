import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');
  console.log('name', name);
  console.log('message', message);

  const getDataFromApi = async (e: any) => {
    e.preventDefault();
    console.log("button pushed");

    const response = await fetch(`/api/hello?name=${name}`);
    console.log(response);
    const json = await response.json();
    console.log(json);
    if (json.message) {
      setMessage(json.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <form id="form1" className="App-form" onSubmit={e => getDataFromApi(e)}>
          <div>
            <input
              type="text"
              id="name"
              className="App-input"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)} />
            <button type="submit" className="App-button">Submit</button>
          </div>
        </form>
        <div><h5>Message: {message} </h5></div>
      </header>
    </div>
  );
}

export default App;
