import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Project from "./components/Project";
import Post from "./components/Post";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

function App() {
  return (
    <>
      <div className="App__WhatsAppWidget" style={{ zIndex: "100" }}>
        <WhatsAppWidget
          companyName="Ram Estate Agency"
          phoneNumber="+919987130717"
        />
      </div>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={SinglePost} path="/post/:slug" />
          <Route component={Post} path="/post" />
          <Route component={Project} path="/project" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
