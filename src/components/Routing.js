import { React } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home/Home'
import FoodDetails from './FoodDetails/FoodDetails';

const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/foodDetails/:id' element={<FoodDetails />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;