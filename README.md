# Namaste React🚀

...

# Parcel

-Dev build
-local server
-HMR (Hot Module Replacement)
-File Watching Algorithm written in C++
-Caching (Faster Builds)
-Image Optimization
-Bundling
-Minification
-Compress files
-Consistent Hashing
-Code Splitting/ Dynamic Bundling/ Chunking/ Lazy Loading
-Differential Bundling : supports older browser also
-Diagnostics
-Error Display View/ Error Handling
-HTTPs hosting available
-Tree Shaking : removes unused code
-Different Dev and PROD builds

# Types of Export/Import

-Named Export Ex: export const name
-Default Export Ex: export default CompName

# React Hooks

-written by Facebook devs
-normal JS utility functions
-two very imp hooks: useState() & useEffect()

# Recoinciliation Algorithm / React Fibre

- In React 16 this new algo came in
- New way of finding Diff (between the old and updated DOM)
- Refer acdlite githib for react fibre architecture

# Monolith and MicroService Architecture

- All services altogether in Monolith
- In microservices (Single Responsibility Service) there are microservices that comes together to form an app
- Two ways UI make an API call
  1. Page oads --> Make an ap call --> UI rendered
  2. Page loads --> Render Shimmer UI --> API call --> Rerender UI
- 2nd approach is better because better UX

# CORS Error

- localhost/:1 Access to fetch at 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6357675&lng=88.4382682&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING' from origin 'http://localhost:1234' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
- For now to bypass CORs we ae using CORS chrome extension

# Shimmer UI

- A shimmer UI is a version of the UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear

# Swiggy API/ API structure gets updated often so you need to keep that in check and change your formatting accordingly.

- 1.(jsonData?.data?.cards[2]?.data?.data?.cards) - until episode 5
- 2. (jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) - episode 6

# Routing Configuration (react-router-dom)

- createBrowserRouter takes lists of paths(object)
- Router Provider
- useRouteError - hook by reaact-router-dom - details about error
- Link component for routing : smooth and fast : Single Page Application
- Link is a wrapper over anchor tag

# Two types of Routing

- Client side routing
- Server side routing

# Dynamic Routing

- path:'/restaurants/:resId
- ':' means resId is dynamic
- useParams hook will fetch rameters from url.

# Class Based Components

- class name extends Ract.Component{
  constructor(props){
  super(props);
  }
  render(){
  return();
  }
  }

- super(props) : t would pass the props to the parent constructor
- this.props.x - to access the prop
- Lifecycle methods : ComponentDidMount() etc : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ : Render and commit phase
- Parent constructor-> Parent render-> Child constructor -> Child render -> Child componentDidMount -> Parent componentDidMount
- To make api calls from class based we can make componenentDidMount
  -componentDidUpdate: triggerered from componentDidMount
  -componentWillUnmount:called when component gets removed from the page, ex moving to other component
  -useEffect return function works like componentWillUnmount

# Single Responsibility Principle :

- Every class, module, or function in a program should have one responsibility/purpose in a program

# Custom Hooks :

- Custom Hooks in React are a way to encapsulate reusable logic and state within functional components

# Window :

- The offline event of the Window interface is fired when the browser has lost access to the network and the value of Navigator.onLine switches to false.
- The online event of the Window interface is fired when the browser has gained access to the network and the value of Navigator.onLine switches to true.
- Lazy, Suspense(fallback)

# Tailwind CSS

- Install with guide for parcel
- tailwindcss and postcss (tool for transforming css with js)
- Postcssrc is required by parcel to read tailwind

# HOC

- A higher-order component is a function that takes a component and returns a new component.

# Controlled aand Uncontrolled Components

- controlled : In a controlled component, form data is handled by a React component.
- Lifting state up - https://legacy.reactjs.org/docs/lifting-state-up.html
- In our app RestCategory is a controlledComponent as we are passing showIndex props to contol the behavior of accordian from its parent RestMenuPage.

- uncontrolled : The alternative is uncontrolled components, where form data is handled
  by the DOM itself. To write an uncontrolled component, instead of
  writing an event handler for every state update, you can use a ref
  to get form values from the DOM.

# Props Drilling

- https://www.scaler.com/topics/react/prop-drilling-in-react/
- Problem : https://react.dev/learn/passing-data-deeply-with-context#the-problem-with-passing-props

# React Context

- https://react.dev/reference/react/useContext
- https://react.dev/reference/react/createContext
- Cannot be used in class based components with hooks, so Context.Consumer is used

# Redux

- A Predictable State Container for JS Apps
- https://redux.js.org/
- Install @reduxjs/toolkit and react-redux
- Build our store and the connect to our app
- Create cart slices in store
- Ex: (WRITE): Add button will dispatch an action that will call a Reducer Function which will then modify the Slice of our Cart Store(Redux Store).
- (READ): To fetch/read data from Store we need a Selector which will modify our component. This process is called Subscribing to Store
- Read Immer - https://immerjs.github.io/immer/
- RTK Query : https://redux-toolkit.js.org/rtk-query/overview

# Testing

- Unit, Integration , End to End
- Libraries : @testing-library/react , jest
- Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!
- Using Babel :https://jestjs.io/docs/getting-started (Babel for jest)

# Setting up test

- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation using .parcelrc : https://parceljs.org/languages/  javascript/
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom
