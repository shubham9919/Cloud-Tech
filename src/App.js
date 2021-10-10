// import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";
// import './App.css';
// import AboutUs from './components/About-Us/AboutUs';
// import Home from './components/Home/home';
// import Blog from './components/Blogs/Blog';
// import LoadSearchResultMatch from './components/Search-Bar/LoadSearchResultMatch';


// //https://stackoverflow.com/questions/40714583/how-to-specify-a-port-to-run-a-create-react-app-based-project/48669909#48669909

// function App() {
//   const [name, setName] = useState("")
//   const [surname, setSurname] = useState("")
//   const [fullName, setFullName] = useState()
//   const inputNameEvent = (event) => {
//     console.log(event.target.value)
//     setName(event.target.value)
//   }
//   const inputSurnameEvent = (event) => {
//     console.log(event.target.value)
//     setSurname(event.target.value)
//   }

//   const onSubmits = (event) => {
//     event.preventDefault()   //to avoid page refresh of form tag
//     setFullName(`${name }  ${surname}`)
//   }
//   return (
//     <React.Fragment>
//       <form onSubmit={onSubmits}>
//         <div>
//           <h1>Hello {fullName}</h1>
//           <input type="text" placeholder="enter name"
//             onChange={inputNameEvent}
//             value={name}
//           ></input>
//             <input type="text" placeholder="enter surname"
//             onChange={inputSurnameEvent}
//             value={surname}
//           ></input>
//           <button >Submit</button>
//         </div>
//         </form>
//     </React.Fragment>

//   );
// }

// export default App;




















import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import AboutUs from './components/About-Us/AboutUs';
import Home from './components/Home/home';
import Blog from './components/Blogs/Blog';
import LoadSearchResultMatch from './components/Search-Bar/LoadSearchResultMatch';


//https://stackoverflow.com/questions/40714583/how-to-specify-a-port-to-run-a-create-react-app-based-project/48669909#48669909

function App() {
  return (
<Switch>
      <Route exact path="/search" component={LoadSearchResultMatch}/>
      <Route exact path="/" component={Home} />
      <Route exact path="/aboutus" component={AboutUs}/>
      <Route exact path="/:topic" component={Blog}/>
</Switch>
  );
}

export default App;
