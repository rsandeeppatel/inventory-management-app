import { useNavigate } from 'react-router-dom'
import { InventoryDetail } from '../types/type'

interface ProductProps {
  item: InventoryDetail,
  setDeleteConfirm: (item: InventoryDetail) => void
  setEditModal: (item: InventoryDetail) => void
}
export default function Product({ item, setDeleteConfirm, setEditModal }: ProductProps) {
  const navigate = useNavigate()
  const { id, name, description,price, stock, supplier,imageUrl } = item
  return (
    <tr className="bg-white border-b hover:bg-gray-50"  id='item-row'>
      <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        <img src={imageUrl} alt={item.name} className='w-28 h-12' />
      </td>
      <td className="px-6 py-4">
          {name}
      </td>
      <td className="px-6 py-4">
          {description}
      </td>
      <td className="px-6 py-4">
          {price}
      </td>
      <td className="px-6 py-4">
          {stock}
      </td>
      <td className="px-6 py-4">
          {supplier}
      </td>
      <td className='px-6 py-4'>
        <button onClick={() =>navigate(`/product/${id}`)} className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Product Details</button>
        <button onClick={() => setEditModal(item) } className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Edit</button>
        <button type='button' onClick={() => setDeleteConfirm(item)}  className='text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '>Delete</button>
      </td>
    </tr>
  )
}
