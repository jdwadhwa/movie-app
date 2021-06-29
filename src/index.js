import react from "react";


import Reactdom from "react-dom";

import {createStore} from "redux";


import reducers from "./reducers";

import { applyMiddleware } from "redux";


import thunk from "redux-thunk"

import App from "./components/app";

var store = createStore(reducers,applyMiddleware(thunk)) ;
//console.log(store);

Reactdom.render(<App store = {store}/>,
    document.querySelector("#root"));