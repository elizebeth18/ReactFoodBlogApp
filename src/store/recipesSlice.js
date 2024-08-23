import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    foodRecipes: [],
    isLoading: false,
    error: null
}

export const fetchRecipes = createAsyncThunk('fetchRecipes', async () => {
    const response = await axios.get('https://dummyjson.com/recipes')
    return response.data.recipes;
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
        })
    }
});

export default recipes.reducer