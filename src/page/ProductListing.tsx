import { useContext, useState } from "react"
import { InventoryContext } from "../store/inventoryContext"
import Product from "../components/Product"
import Modal from "../components/Modal"
import Header from "../components/Header"
import DeleteModal from "../components/DeleteModal"
import { InventoryDetail } from "../types/type"
import EditModal from "../components/EditModal"

export default function ProductListing() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [deleteConfirm, setDeleteConfirm] = useState<boolean>(false)
  const [itemToDelete, setItemToDelete] = useState<InventoryDetail | undefined>(
    undefined
  )
  const [editModal, setEditModal] = useState<boolean>(false)
  const [itemToEdit, setItemToEdit] = useState<InventoryDetail | undefined>(
    undefined
  )

  const { totalLowStock } = useContext(InventoryContext)

  const handleDeleteModal = (item: InventoryDetail) => {
    setItemToDelete(item)
    setDeleteConfirm(true)
  }

  const handleEditModal = (item: InventoryDetail) => {
    setItemToEdit(item)
    setEditModal(true)
  }
  return (
    <>
      <div className="flex items-center gap-4 justify-center rounded">
        <Header setShowModal={setShowModal} />
      </div>
      <table className="w-full text-sm text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3">
              Supplier
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        {totalLowStock.map((item) => (
          <tbody key={item.id}>
            <Product
              item={item}
              key={item.id}
              setDeleteConfirm={() => handleDeleteModal(item)}
              setEditModal={() => handleEditModal(item)}
            />
          </tbody>
        ))}
      </table>
      {showModal && <Modal setShowModal={setShowModal} />}
      {deleteConfirm && itemToDelete && (
        <DeleteModal item={itemToDelete} setDeleteConfirm={setDeleteConfirm} />
      )}
      {editModal && itemToEdit && (
        <EditModal item={itemToEdit} setEditModal={setEditModal} />
      )}
    </>
  )
}
