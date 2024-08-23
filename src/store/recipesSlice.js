import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    foodRecipes: [],
    foodItem:{},
    isLoading: false,
    error: null
}

export const fetchRecipes = createAsyncThunk('fetchRecipes', async () => {
    const response = await axios.get('https://dummyjson.com/recipes')
    return response.data.recipes;
})

export const fetchOneRecipe = createAsyncThunk('fetchOneRecipe', async (id) => {
    const response = await axios.get(`https://dummyjson.com/recipes/${id}`)
    return response.data;
})

const recipes = createSlice({
    name: 'recipes',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchRecipes.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.foodRecipes = action.payload;
        }).addCase(fetchRecipes.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }).addCase(fetchOneRecipe.pending, (state) => {
            state.isLoading = true;
        }).addCase(fetchOneRecipe.fulfilled,(state, action) => {
            state.foodItem = action.payload;
            state.isLoading = false;
        }).addCase(fetchOneRecipe.rejected, (state, action)=>{
            state.error = action.error.message;
        })
    }
});

export default recipes.reducer