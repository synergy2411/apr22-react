import { useState } from 'react';
import ClassBased from "./Components/Demo/ClassBased/ClassBased";
import UseEffectDemo from './Components/Demo/Hooks/UseEffectDemo';
import UseReducerDemo from './Components/Demo/Hooks/UseReducerDemo';
import Expenses from "./Components/Expenses/Expenses";

function App() {
  const [showComp, setShowComp] = useState(true);

  const clickHandler = () => setShowComp(!showComp)

  return (
    <div className="App">
      <h4>Hello React!!</h4>
      
      <UseEffectDemo />

      {/* <UseReducerDemo /> */}

      {/* <Expenses /> */}
      
      {/* <hr /> */}

    {/* <button onClick={clickHandler}>Toggle Component</button> */}

      {/* {showComp ? <ClassBased /> :  "Click button to see component"} */}
      {/* {showComp && <ClassBased />} */}
    </div>
  );
}

export default App;
