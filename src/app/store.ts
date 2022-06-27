import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// API reducers
import { speciesListApi } from '../features/speciesList/api';
import { speciesProfileApi } from '../features/speciesProfile/api';
import { characterProfileApi } from '../features/characterProfile/api';

const store = configureStore({
  reducer: {
    [speciesListApi.reducerPath]: speciesListApi.reducer,
    [speciesProfileApi.reducerPath]: speciesProfileApi.reducer,
    [characterProfileApi.reducerPath]: characterProfileApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    speciesListApi.middleware,
    speciesProfileApi.middleware,
    characterProfileApi.middleware,
  ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
