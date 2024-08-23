import React from "react";
import "./App.css";
import Home from "./Home";


const App = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 " style={{border: '1px thin black'}}>
                    <ul className="nav">
                        <li className="active">
                            <a>Action</a>
                        </li>
                        <li className="">
                            <a>Action</a>
                        </li>
                        <li className="">
                            <a>Action</a>
                        </li>
                        <li className="">
                            <a>Action</a>
                        </li>
                        <li className="">
                            <a>Action</a>
                        </li>
                        <li className="">
                            <a>Action</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-10" style={{border: '1px thin black'}}>
                    <Home />
                </div>
            </div>
        </div>
    );
}

export default App;