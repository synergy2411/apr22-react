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










- useRef
- useContext
- useMemo
- useCallback
- useDebugValue


# React < 16.8
- Functional / Presentational / Stateless - manage the state, make any side effect code
- Class based / Container / Stateful
