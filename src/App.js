import React from 'react';
import './App.css';
import Leftsideapp from "./left_side"
import RightSideContent from "./right_side"
// import RightHeader from "./right_side_header"

function App() {
  console.log(Leftsideapp)
  return (
    <div className="App">
      <Leftsideapp />
      <RightSideContent />
    </div>
  );
}

export default App;
