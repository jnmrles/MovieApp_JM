import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";

// switch allows usage of different routes
const App = () => (
  <div>
    <CssBaseline />
    <main>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route exact path="/movies">
          <h1> Movies</h1>
        </Route>
        <Route exact path="/movie/:id">
          <h1>Movie</h1>
        </Route>
        <Route exact path="/actors/:id">
          <h1>Actors</h1>
        </Route>
        <Route exact path="/profile/:id">
          <h1>Profile</h1>
        </Route>
      </Switch>
    </main>
  </div>
);

export default App;
