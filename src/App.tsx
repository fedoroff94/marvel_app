import React from "react";
import { useSelector } from 'react-redux';

const App = () => {
  const store = useSelector(store => store);
  console.log(store);
  
return (
  <div>
    Hello
  </div>
)
};

export default App;
