import "./App.css";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Life from "./pages/Life";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  return (
    <Router>
     <div className="App">
        <Navbar />
        <Switch>         
          <Route exact path={"/"}>
           <Home />
          </Route> 
          <Route exact path={"/about"}>
            <About />
          </Route>  
          <Route exact path={"/contact"}>
            <Contact />
          </Route> 
          <Route exact path={"/life"}>
            <Life />
          </Route>  
        </Switch>
        <Footer />
     </div>
    </Router>
  );
}


          // <Switch>
          //    <Route exact path={"/"}>
          //    <Home/> 
          //   </Route>
          //   <Route exact path={"/decks/new"}>
          //       <CreateDeck/>
          //   </Route>
          // </Switch>

export default App;