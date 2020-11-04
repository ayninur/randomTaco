import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Display from "./components/Display.js";
// import Form from './components/Form.js'
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  // set random taco's state
  const [random, setResults] = React.useState({})
  // Make an API
  const url = "http://taco-randomizer.herokuapp.com/random/?full-tack=true"

  const getRandomTaco = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setResults(data);
  }
  React.useEffect(() => {
    getRandomTaco()
  }, [])

  return (
    <>
      <Display taco={random} />
      {/* <Form search={getRandomTaco} /> */}
    </>)


}

export default App
