import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from '../slice/userSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
    },
    middleware: [
        // Because we define the middleware property here, we need to explictly add the defaults back in.
        ...getDefaultMiddleware(),
    ],
});
