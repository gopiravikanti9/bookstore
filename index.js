import React from 'react';
import ReactDOM from 'react-dom';
import Bookstore from "./Bookstore";
import "./index.css";
//import FirstComponent from "./FirstComponent"; // herw we imported our component
//import Details from "./Details";
//import NestedComponents from "./NestedComponents";
/*here we used our component*/
ReactDOM.render(
    <div>
        <Bookstore />
    </div>,
    document.getElementById('root')
);