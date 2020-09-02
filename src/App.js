import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PokeList from "./components/PokeList.js";
import PokeDetail from "./components/PokeDetail.js";
import "./styles.css";

function App() {
  return (
    <Router className="App">
      <Route exact path="/" component={PokeList} />
      <Route path="/detail/:id" component={PokeDetail} />
    </Router>
  );
}

export default App;
