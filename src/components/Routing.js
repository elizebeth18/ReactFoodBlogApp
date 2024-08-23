import { React } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import NavBar from './NavBar';

const Routing = () => {
    return(
        <BrowserRouter>
            <NavBar />
            <App />
        </BrowserRouter>
    );
}

export default Routing;