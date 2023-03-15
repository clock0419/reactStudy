import React from 'react';
import './App.css'
import Title from './Components/Title'
import Hello from './Components/Hello';

const App : React.FC = () => {
  const name = "kang";
  const language = "ko";

  return (
    <div className="App">
      <Title/>
      <Hello name={name} language={language}/>
    </div>
  )
}

export default App
