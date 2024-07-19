import React, { useContext } from 'react'
import { InventoryContext } from '../store/inventoryContext'
import { departmentType } from '../database/departmentType'

interface HeaderProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({ setShowModal }: HeaderProps) {
  const { dispatchInventoryState } = useContext(InventoryContext)

  const sortingArray = ['NAME','PRICE', 'STOCK']
  return (
    <div className='flex flex-row gap-2'>
      <h3 className='text-4xl font-semibold text-gray-900 '>Products</h3>
      <select
        className='w-40 p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 '
        onChange={(e) => 
          dispatchInventoryState({
            type: 'FILTER_DEPARTMENT',
            payload: e.target.value
          })
        }
      >
        <option value=''>
          Select Department
        </option>
        {departmentType?.map((item, index) => {
          return(
            <option id='' value={item} key={index}>
              {item}
            </option>
          )
        })}
      </select>
      <div className='flex items-center justify-center'>
        <input
          className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
          type='checkbox'
          id='lowstock'
          onChange={(e) => 
            dispatchInventoryState({
              type: 'INCLUDE_LOW_STOCK',
              payload: !e.target.checked
            })
          }
        />
        <label htmlFor="lowstock" className='ms-2 text-sm font-medium text-gray-900 '>Low Stock Item</label>
      </div>

      <select
        className='w-40 p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
        onChange={(e) => 
          dispatchInventoryState({
            type: 'SORTING',
            payload: e.target.value
          })
        }
      >
      <option value=''>
        Select Sorting
      </option>
      {sortingArray.map((item,index) => {
        return (
          <option value={item} key={index}>
            {item}
          </option>
        )
      })}        
      </select>

      <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" type='button' className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ' onClick={() => setShowModal(true)}>
        New
      </button>
    </div>
  )
}
