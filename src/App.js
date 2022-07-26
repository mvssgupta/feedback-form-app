//* This the main component also known as root component
import React from "react";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import HeaderComponent from "./components/HeaderComponent";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  return (
    <FeedbackProvider>
    <Router>
      {/* we can pass arguments to the below header component */}
      <HeaderComponent></HeaderComponent>
      <div className="container">
      <Routes>

        <Route exact path='/' element = {
          <>
            <FeedbackForm ></FeedbackForm>
            <FeedbackStats ></FeedbackStats>
            <FeedbackList ></FeedbackList> 
          </>
          } 
        >
        </Route>
        <Route path='/about' element = {<AboutPage></AboutPage>}>
        </Route>
      </Routes>
      </div>
      <AboutIconLink></AboutIconLink>
    </Router>
    </FeedbackProvider>
  );
}

export default App;

// function App() {
//     return (
//       //*this is not the real html , it is jsx (which means html inserted into js)
//       //* here we should return only one component so wrap the multiple elements in to the fragment(<></> which is an empty element used instead of div)
//       <>
//         <h1>hello from the main root component</h1>
//         <p>What's your name?</p>
//       </>
//     );

//   //?instead of writing above code
//   //*we can use react to do that as below ( the below code is regular javascript)
// //   return React.createElement(
// //     "div",
// //     { className: "container" },
// //     React.createElement("h1", {}, "MyApp")
// //   );

//   //!the syntax for React.CreateElement is it takes three arguments
//   /*
//    * 1: the main element , here it is div
//    * 2: arguments to the element above (here ,it is like className : container)
//    * 3: elements need to present inside main element or content , here we have h1 element inside div
//    */
//   //? but it will be complex if we have more elements , so jsx(the previous code is much easier and better to understand)
// }
