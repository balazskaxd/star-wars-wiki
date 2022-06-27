import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ROUTES from './routes';
import store from './app/store';
import './styles/tailwind.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ROUTES.SpeciesPage />} />
          <Route path="species" element={<ROUTES.SpeciesPage />} />
          <Route path="species/:id" element={<ROUTES.SpeciesProfilePage />} />
          <Route path="characters/:id" element={<ROUTES.CharacterProfilePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
