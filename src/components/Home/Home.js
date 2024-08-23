import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../../store/recipesSlice';
import "./Home.css"
import DisplayFood from './DisplayFood';

const Home = () => {
    const [foodItems, setFoodItems] = useState([]);
    const foodRecipes = useSelector(state => state.recipes.foodRecipes);
    const isLoading = useSelector(state => state.recipes.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecipes());
    }, []);

    useEffect(() => {
        if (foodRecipes && foodRecipes.length > 0) {
            setFoodItems(foodRecipes)
        }
    }, [foodRecipes]);

    return (
        <div className='col-md-12'>
            <div class="panel panel-primary">
                <div style={{textAlign: 'center'}} class="panel-heading">
                    Food Items List
                </div>
                <div class="panel-body">
                    {isLoading ? <>
                        <h3>....Loading</h3>
                        <img src="images/loader.gif" alt="loader" />
                    </> :
                        <DisplayFood data={foodItems} />}
                </div>
            </div>
        </div>
    )
}

export default Home;