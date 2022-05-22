import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user.context';
import App from './App';
import { CartProvider } from './context/cart.context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <UserProvider>
  <CartProvider>
  <App />
  </CartProvider>
  </UserProvider>
  
  </BrowserRouter>
    
  </React.StrictMode>
);
