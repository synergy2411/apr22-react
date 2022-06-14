# Client-side Libraries / Framework
- Angular : XHR Call, DataBinding, Template, Component, Services, SPA etc 
- JQuery : DOM manipultaion, AJAX, Animation
- Vue : Template oriented, extensive use of 3rd party plugins
- Electron : Desktop and WEb Interface
- Knockout : Two way databinding, MVVM
- Backbone : MVC Pattern
- PolymerJS : Custom Web components
- EmberJS : 
- Meteor : 
- React : Small library - 30KB; to render the UI quickly and efficiently; component based apps
    : react-router
    : formik / react-form-hook
    : axios / jquery
    : redux

# to create react startup app
> npx create-react-app <project_name>

# Atomic Design in Web
- atom : smallest unit. e.g one button, one inputbox etc
- molecule : combo of atoms e.g searchbar -> One Inputbox + One button
- organism : combo of molecules -> navigation bar -> multple links + Searchbar
- template : combo of organism -> Card, form
- pages : combo of various template

# Thinking in React -> Create components for reusability

# React App Flow


# Props - attributes supplied to Child Component
# Unidirectional Data Flow - State & Props
# Forms - Accept user inputs, 
- Controller : state managed by React
- Uncontrolled : Refs

# Hooks (v16.8)
- useState

const [stateVar, setStateFn] = useState(intialState)

- useReducer : maintain the complex state for a component; one state depends on other state;

 const [complexState, dipatchFn] = useReducer(reducerFn, intiailState)

 - Reducer Function : (state, action) => newState
 : Pure Functions 
 : No Side Effect code inside Reducer Fn -> Date.now(), Math.random(), XHR Call
 : Never ever mutate its arguments - state and action
  const add = (n1, n2) => n1 + n2;

  - Action : triggered in App - Object : { type : "ADD_TODO", payload? : {label : ""}}

- useEffect : componentDidMount, componentDidUpdate, componentWillUnmount
: What is Side effect?
- XHR
- Route Transitioning
- Changing the state

useEffect(() => {//side effect code})
- runs the cb after initial component rendering and also run after any state changes

useEffect(() => {//side effect code},[])
- runs the cb only after initial rendering

useEffect(() => {//side effect code},[Deps])
- runs the cb after intiial rendering and also whenever the mentioned dependecies will change


useEffect(() => { return () => {}},[Deps])
- Clean up function will run before the CB function, whenever the dependency will change
- Clean up function will NOT run after the initial rendering
- Clean up will also run just before the component is about to destory










- useRef : to access DOM in react App
- useContext : to consume the Context API

"Prop drilling"


- useMemo : memoized the value returned by the supplied function
let memoizedValue = useMemo(() => "Hello World", [])    // "Hello World"
let memoizedValue = useMemo(() => otherFn, [])    // otherFn

- useCallback : memoized the supplied function


# React < 16.8
- Functional / Presentational / Stateless - manage the state, make any side effect code
- Class based / Container / Stateful


shouldComponentUpdate(nextProps, nextState){
  return nextProps.show === this.props.show;   // component will re-render, if true
}



# to install react-router-dom
> npm i react-router-dom@5




# Route Parameter
http://localhost:3000/authors/:authorId

# Query Parameter
http://localhost:3000/authors/102/books?sort=desc



- Prompt

- Code Spliting / Lazy Loading

- migrating from v5 to v6 (react-router-dom)

- Preact : Intro

- Integrate Preact with App





# SPA : loads all the App content at client side
- load app functionality at initial rendering - very commonly used
- lazy load app functionality - not frequently used









synergy2411@outlook.com