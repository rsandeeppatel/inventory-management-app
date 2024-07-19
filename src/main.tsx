import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { InventoryContextProvider } from './store/inventoryContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <InventoryContextProvider>
        <App />
      </InventoryContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
