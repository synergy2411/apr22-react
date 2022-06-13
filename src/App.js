import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ClassBased from "./Components/Demo/ClassBased/ClassBased";
import HookDemo from './Components/Demo/Hooks/HookDemo';
import UseEffectDemo from './Components/Demo/Hooks/UseEffectDemo';
import UseReducerDemo from './Components/Demo/Hooks/UseReducerDemo';
import Expenses from "./Components/Expenses/Expenses";
import Header from './Components/Header/Header';
import AuthContext from './context/authContext';
import Authors from './pages/Authors/Authors';
import FavAuthor from './pages/Authors/FavAuthor/FavAuthor';
import Books from './pages/Books/Books';

function App() {
  return (
    <AuthContext.Provider value={{isLoggedIn : false}}>
    <div className="App">
      <Header />
      <h4>Hello React!!</h4>
      <Switch>
      <Route path="/" exact>     
        <Redirect to="/expenses" />  
      </Route>
      <Route path="/expenses">
        <Expenses />
      </Route>
      <Route path="/hooks">
        <HookDemo />
      </Route>
      <Route path = "/authors/:authorId/books" exact>
        <Books />
      </Route>
      <Route path="/authors">
        <Authors />
      </Route>
      </Switch>
    </div>
    </AuthContext.Provider>
  );
}

export default App;



// const [showComp, setShowComp] = useState(true);

// const clickHandler = () => setShowComp(!showComp)



// <HookDemo />
      
// {/* <UseEffectDemo /> */}

// {/* <UseReducerDemo /> */}

// {/* <Expenses /> */}

// {/* <hr /> */}

// {/* <button onClick={clickHandler}>Toggle Component</button> */}

// {/* {showComp ? <ClassBased /> :  "Click button to see component"} */}
// {/* {showComp && <ClassBased />} */}