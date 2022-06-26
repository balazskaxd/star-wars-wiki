import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { speciesListApi } from '../features/speciesList/api';
import { speciesProfileApi } from '../features/speciesProfile/api';

const store = configureStore({
  reducer: {
    [speciesListApi.reducerPath]: speciesListApi.reducer,
    [speciesProfileApi.reducerPath]: speciesProfileApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    speciesListApi.middleware,
    speciesProfileApi.middleware,
  ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
