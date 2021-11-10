import { useEffect } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Posts from "./components/Posts";
import SinglePost from "./components/SinglePost";

const App = () => {
  useEffect(() => {}, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/posts">
              <Posts />
            </Route>
            <Route exact path="/posts/:id">
              <SinglePost />
            </Route>
            <Route path="/create">{/* <Create /> */}</Route>
            <Route path="/login">{/* <BlogDetails /> */}</Route>
            <Route path="/register">{/* <BlogDetails /> */}</Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
