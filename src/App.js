import './App.css';
import React, { useState } from 'react'
import Keyboard from './components/keyboard/Keyboard';
import Monitor from './components/monitor/Monitor';
export const dataContext = React.createContext()

function App() {

  const [mainText, setMainText] = useState()
  const [subText, setSubText] = useState()

  return (
    <div className="App">
      <dataContext.Provider value={{setMainText, setSubText}}>
        <Monitor mainText={mainText} subText={subText} />
        <Keyboard />
      </dataContext.Provider>
    </div>
  );
}

export default App;
