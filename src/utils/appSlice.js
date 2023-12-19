import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenu:true,
    },
    reducers:{
        ToggleMenu:(state)=>{
            //This is how we modify our state
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
});
export const { ToggleMenu } = appSlice.actions;
export default appSlice.reducer;