import React from "react";
import "./Main.css";
import Routing from "./Routing";
import NavBar from './NavBar';


const Main = () => {
    return (
        <>
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 ">
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
                    <div className="col-md-10">
                        <Routing />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;