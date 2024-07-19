import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { InventoryContext } from '../store/inventoryContext'
import { departmentType } from '../database/departmentType'

export default function Department() {
  const navigate = useNavigate()

  const { dispatchInventoryState } = useContext(InventoryContext)
  return (
    <div  className="flex items-center gap-4 justify-center rounded">
      {departmentType.map((item, index) => {
        return (
          <div key={index} 
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            onClick={(e) => {
              dispatchInventoryState({
                type: 'FILTER_DEPARTMENT',
                payload: item
              })
              navigate("/product");
            }}
          >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item}</h5>
        </div>
      )})}
    </div>
  )
}
