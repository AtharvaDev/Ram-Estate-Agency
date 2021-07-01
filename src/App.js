import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Project from "./components/Project";
import Post from "./components/Post";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={About} path="/about"/>
        <Route component={SinglePost} path="/post/:slug"/>
        <Route component={Post} path="/post"/>
        <Route component={Project} path="/project"/>

        <div className="App">RamEstateAgency</div>{" "}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
