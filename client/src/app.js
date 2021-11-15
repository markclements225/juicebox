import { useEffect } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Posts from "./components/Posts";
import SinglePost from "./components/SinglePost";
import Register from "./components/Register";
import LoginForm from "./components/LoginForm";
import NewPost from "./components/NewPost";
import EditPost from "./components/EditPost";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const TOKEN = window.localStorage.getItem("token");
    const checkAuth = async () => {
      const response = await fetch(`/api/users/authenticate`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      const data = await response.json();
      if (data.success === true) {
        setIsLoggedIn(true);
      }
    };
    checkAuth();
  }, [isLoggedIn]);

  return (
    <Router>
      <div className="App">
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
            <Route path="/create">
              <NewPost isLoggedIn={isLoggedIn} />
            </Route>
            <Route path="/edit/:id">
              <EditPost isLoggedIn={isLoggedIn} />
            </Route>
            <Route path="/login">
              <LoginForm setIsLoggedIn={setIsLoggedIn} />
            </Route>
            <Route path="/register">
              <Register setIsLoggedIn={setIsLoggedIn} />
            </Route>
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
