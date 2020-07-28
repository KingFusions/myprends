import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./js/home.js";
import Nav from "./js/nav.js";
import PG from "./js/pg/putyagang.js";
import TB from "./js/tb/teambatak.js";
import Personal from "./js/personal.js";
import Kepler from "./js/kepler/kepler.js";
import AllMemories from "./js/allmemories.js";

ReactDOM.render(
    <>
        <Router>
            <Nav />
            <Switch>
                <Route path="/myprends" exact component={Home} />
                <Route path="/putyagang" exact component={PG} />
                <Route path="/teambatak" exact component={TB} />
                <Route path="/kepler" exact component={Kepler} />
                <Route path="/memories" exact component={AllMemories} />
                <Route path="/putyagang/person/:id" component={Personal} />
            </Switch>
        </Router>
    </>,
    document.getElementById("root")
);
