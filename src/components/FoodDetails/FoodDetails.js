import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { fetchOneRecipe } from '../../store/recipesSlice';
import { useDispatch, useSelector } from 'react-redux';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const FoodDetails = () => {

    const params = useParams();

    const foodItem = useSelector(state => state.recipes.foodItem);
    const dispatch = useDispatch();

    const [foodData, setFoodData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchOneRecipe(params.id))
    }, [params]);

    useEffect(() => {
        setFoodData(foodItem);
    }, [foodItem]);

    const displayListItems = (data) => {
        return data && data.map((item) => {
            return (
                <li key={Math.random()}>
                    {item}
                </li>
            )
        })
    }

    const goBack = () => {
        navigate('/',{replace: true});
    }

    return (
        <>
            <div style={{ width: '100%', display: 'flex' }}>
                <div style={{ width: '35%' }}>
                    <img src={foodData.image} style={{ width: '100%' }}
                        alt={foodData.name} />
                </div>
                <div style={{ width: '60%', padding: '10px', margin: '10px' }}>
                    <h3>{foodData.name}</h3>
                    <span>Prep Time In Minutes : {foodData.prepTimeMinutes}</span><br />
                    <span>Cooking Time In Minutes : {foodData.cookTimeMinutes}</span><br />
                    <span>Servings : {foodData.servings}</span><br />
                    <span>Cuisine : {foodData.cuisine}</span><br />
                    <br /><br />
                    <div>
                        <Tabs>
                            <TabList>
                                <Tab>Ingredients</Tab>
                                <Tab>Instructions</Tab>
                            </TabList>

                            <TabPanel>
                                <ul>
                                    {displayListItems(foodData.ingredients)}
                                </ul>
                            </TabPanel>
                            <TabPanel>
                                <ul>
                                    {displayListItems(foodData.instructions)}
                                </ul>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary' onClick={() => {goBack()}}
                style={{margin: 15}}>Back</button>
        </>
    )
}

export default FoodDetails;