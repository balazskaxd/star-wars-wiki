import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { speciesApi } from '../features/speciesList/api';

const store = configureStore({
  reducer: {
    [speciesApi.reducerPath]: speciesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(speciesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
