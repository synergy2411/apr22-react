import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Expenses from "./Components/Expenses/Expenses";
import Header from './Components/Header/Header';
import AuthContext from './context/authContext';


const HookDemo = React.lazy(() => import("./Components/Demo/Hooks/HookDemo"))
const Authors = React.lazy(() => import("./pages/Authors/Authors"))
const Books = React.lazy(() => import("./pages/Books/Books"))
const NewBook = React.lazy(() => import("./pages/Books/NewBook/NewBook"))

function App() {
  return (
    <AuthContext.Provider value={{isLoggedIn : false}}>
    <div className="App">
      <Header />
      <h4>Hello React!!</h4>
      <Suspense fallback={<p>Loading...</p>}>
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
      <Route path="/authors/:authorId/books/add-new" exact>
        <NewBook />
      </Route>
      <Route path = "/authors/:authorId/books" exact>
        <Books />
      </Route>
      <Route path="/authors">
        <Authors />
      </Route>
      </Switch>
      </Suspense>
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