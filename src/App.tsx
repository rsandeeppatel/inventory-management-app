import React from 'react'
import SideBar from './components/SideBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './page/Dashboard';
import Department from './page/Department';
import ProductListing from './page/ProductListing';
import DetailedProduct from './page/DetailedProduct';

export default function App() {
  return (
    <div className='flex'>
      <div className='fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white'>
        <SideBar />
      </div>
      <div className='ml-64 p-4 w-full'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/department' element={<Department />} />
          <Route path='/product' element={<ProductListing />} />
          <Route path='/product/:productID' element={<DetailedProduct />}/>
        </Routes>
      </div>
    </div>
  )
}
