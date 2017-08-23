import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import {App} from "./src/App";
import {Signup} from "./src/Signup";

ReactDOM.render(
    // <Provider>
        <Router>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/signup" component={Signup}/>
            </div>
        </Router>,
    // </Provider>,
    document.getElementById("root")
);
