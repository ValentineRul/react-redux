import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

import Counter from "./components/counter";
import App from "./components/app";

//  создаем хранилище
const store = createStore(reducer);

// actions =  {
//     inc: inc,
//     dec: dec,
//     res: res,
// }

//!Как работает redux bindActionCreators под капотом
// const bindActionCreator =
//     (creator, dispatch) =>
//     (...args) => {
//         dispatch(creator(...args));
//     };

//  функция обновляет counter
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
