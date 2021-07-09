import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Project from "./components/Project";
import Post from "./components/Post";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import Footer from "./components/smallParts/Footer";
import Draggable from "react-draggable";

function App() {
  const location = useLocation();
  // console.log(location);

  return (
    <>
      <Draggable>
        <div className="App__WhatsAppWidget" style={{ zIndex: "100" }}>
          <WhatsAppWidget
            companyName="Ram Estate Agency"
            phoneNumber="+919987130717"
          />
        </div>
      </Draggable>

      <div className="App__WhatsAppWidget__mobile">
        <WhatsAppWidget
          companyName="Ram Estate Agency"
          phoneNumber="+919987130717"
        />
      </div>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={SinglePost} path="/post/:slug" />
          <Route component={Post} path="/post" />
          <Route component={Project} path="/project" />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
