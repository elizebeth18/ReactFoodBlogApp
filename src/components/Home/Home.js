import React,{ useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../store/recipesSlice';

const Home = () => {
    const [foodItems, setFoodItems] = useState([]);
    const foodRecipes = useSelector( state => state.recipes.foodRecipes);
    const isLoading = useSelector( state => state.recipes.isLoading);
    const  dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchRecipes());
    },[]);

    useEffect(()=>{
        if(foodRecipes && foodRecipes.length > 0) {
            setFoodItems(foodRecipes)
        }
    },[foodRecipes]);

    const displayFoodItems = (data) => {
        if(data && data.length > 0) {
            return data.map(item => {
                return(
                    <div className='col-md-4' key={item.id}>
                        <div>
                            <img src={item.image} alt={item.name} style={{width: '100%'}}/>
                        </div>
                        <h4>{item.name}</h4>
                    </div>
                )
            })
        }
    }

    return(
        <div className='col-md-12'>
            {isLoading ? <div>
                <h3>....Loading</h3>
                <img src="images/loader.gif" alt="loader"/>
            </div>:
            displayFoodItems(foodItems)}
        </div>
    )
}

export default Home;