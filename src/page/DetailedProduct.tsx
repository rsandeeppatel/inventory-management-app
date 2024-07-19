import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { InventoryContext } from '../store/inventoryContext'

export default function DetailedProduct() {
  const { productID } = useParams()

  const {allInventory} = useContext(InventoryContext)
  const matched = allInventory.find((item) => item.id == productID)
  return (
      <div className='flex flex-row gap-4'>
        <div>
          <img src={matched.imageUrl} className='w-80 h-80 transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="name">Name : {matched.name}</label>
          <label htmlFor="price">Price : {matched.price}</label>
          <label htmlFor="stock">Stock : {matched.stock}</label>
          <label htmlFor="supplier">Supplier : {matched.supplier}</label>
          <label htmlFor="department">Department : {matched.department}</label>
          <label htmlFor="sku">SKU : {matched.sku}</label>
          <label htmlFor="delivered">Delivered : {matched.delivered}</label>
        </div>
      </div>
  )
}
