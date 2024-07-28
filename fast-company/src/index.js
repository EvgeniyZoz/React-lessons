import React from 'react';
import ReactDOM from 'react-dom'; 
import { createRoot } from 'react-dom/client'; // Импорт из правильного места
import 'bootstrap/dist/css/bootstrap.css';
import Users from './components/users';
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById('root')); // Используйте createRoot из правильного места

root.render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>
);

reportWebVitals();
