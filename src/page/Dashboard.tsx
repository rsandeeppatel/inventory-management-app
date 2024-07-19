import React, { useContext } from 'react'
import { InventoryContext } from '../store/inventoryContext'
import { InventoryDetail } from '../types/type'

export default function Dashboard() {
  const { totalStock, totalDelivered,  allInventory } = useContext(InventoryContext)
  
  const totalLowStock = allInventory.filter((item: InventoryDetail) => item.stock <= 10)
  return (
    <div className="flex items-center gap-4 justify-center rounded">
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{totalStock}</h5>
        <p className="font-normal text-gray-700">Total Stock</p>
      </div>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{totalDelivered}</h5>
        <p className="font-normal text-gray-700">Total Delivered</p>
      </div>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{totalLowStock?.length}</h5>
        <p className="font-normal text-gray-700">Low Stock Items</p>
      </div>
    </div>
  )
}
