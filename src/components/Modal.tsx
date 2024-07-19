import React, { useContext } from 'react'
import { InventoryContext } from '../store/inventoryContext'

interface ModalProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Modal({ setShowModal }: ModalProps) {
  const { dispatchInventoryState, ventoryDetail } = useContext(InventoryContext)

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    dispatchInventoryState({
        type: 'SET_INVENTORY_DETAIL',
        payload: { name, value }
    })
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    dispatchInventoryState({ type: 'GET_INVENTORY_DETAIL'})
    setShowModal(false)
  }
  return (
    <div className='overflow-y-auto overflow-x-hidden fixed top-9 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'>
        <div className='relative p-4 flex justify-center w-full max-h-full'>
            <div className='relative bg-white rounded-lg shadow '>
                <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t '>
                    <h3 className='text-lg font-semibold text-gray-900 '>
                        Add new product
                    </h3>
                    <button type='button' onClick={() => setShowModal(false)}  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center '>
                        <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
                            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'/>
                        </svg>
                        <span className='sr-only'>Close modal</span>
                    </button>
                </div>
                <form className='p-4 md:p-5 gap-2' onSubmit={submitHandler}>
                    <div className='grid gap-4 mb-4 grid-cols-2'>
                        <div className='col-span-2'>
                            <label htmlFor='department' className='block mb-2 text-sm font-medium text-gray-900 '>Department</label>
                            <input 
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                                type='text'
                                name='department'
                                id='department' 
                                placeholder='Department'
                                value={ventoryDetail?.department}
                                onChange={inputHandler}
                                required
                            />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 '>Name</label>
                            <input 
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                                type='text'
                                name='name'
                                id='name' 
                                placeholder='Name'
                                value={ventoryDetail?.name}
                                onChange={inputHandler}
                                required
                            />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor='description' className='block mb-2 text-sm font-medium text-gray-900 '>Description</label>
                            <textarea 
                                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ' placeholder='Write product description here'
                                id='description'
                                name='description'
                                value={ventoryDetail?.description}
                                onChange={inputHandler}
                                required
                            >
                            </textarea>                    
                        </div>
                        <div className='col-span-2 sm:col-span-1'>
                            <label htmlFor='price' className='block mb-2 text-sm font-medium text-gray-900 '>Price</label>
                            <input 
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                                type='number'
                                name='price'
                                id='price'
                                placeholder='Price'
                                value={ventoryDetail?.price}
                                onChange={inputHandler}
                                required
                            />
                        </div>
                        <div className='col-span-2 sm:col-span-1'>
                            <label htmlFor='stock' className='block mb-2 text-sm font-medium text-gray-900 '>Stock</label>
                            <input
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                                type='number'
                                name='stock'
                                id='stock'
                                placeholder='Stock'
                                value={ventoryDetail?.stock}
                                onChange={inputHandler}
                                required
                            />
                        </div>
                        <div className='col-span-2 sm:col-span-1'>
                            <label htmlFor='sku' className='block mb-2 text-sm font-medium text-gray-900 '>SKU</label>
                            <input 
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                                type='text'
                                name='sku'
                                id='sku' 
                                placeholder='SKU'
                                value={ventoryDetail?.sku}
                                onChange={inputHandler}
                                required
                            />
                        </div>
                        <div className='col-span-2 sm:col-span-1'>
                            <label htmlFor='delivered' className='block mb-2 text-sm font-medium text-gray-900 '>Delivered</label>
                            <input 
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                                type='number'
                                name='delivered'
                                id='delivered' 
                                placeholder='Delivered'
                                value={ventoryDetail?.delivered}
                                onChange={inputHandler}
                                required
                            />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor='supplier' className='block mb-2 text-sm font-medium text-gray-900 '>Supplier</label>
                            <input 
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                                type='text'
                                name='supplier'
                                id='supplier' 
                                placeholder='Supplier'
                                value={ventoryDetail?.supplier}
                                onChange={inputHandler}
                                required
                            />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor='imageUrl' className='block mb-2 text-sm font-medium text-gray-900 '>Image Url</label>
                            <input 
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                                type='text'
                                name='imageUrl'
                                id='imageUrl' 
                                placeholder='Image Url'
                                value={ventoryDetail?.imageUrl}
                                onChange={inputHandler}
                                required
                            />
                        </div>
                    </div>
                    <button type='submit' className='text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '>
                        Add new product
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
