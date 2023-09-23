import { configureStore } from '@reduxjs/toolkit';

import carReducer from '../src/car/carSlice'

export const store = configureStore({
    reducer: {
        car: carReducer
    },
});

export default store;