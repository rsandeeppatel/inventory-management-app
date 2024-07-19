import { ReactNode } from "react"

export type InventoryDetail = {
    id: number
    department: string
    name: string
    description: string
    price: number
    stock: number
    sku: string
    supplier: string
    delivered: number
    imageUrl: string
}

export type State = {
    allInventory: InventoryDetail[]
    filterDepartMentType?: string
    includeLowStock?: boolean
    sortingType?: string
    ventoryDetail: InventoryDetail
}

export type Action =
    | { type: 'LOCAL_STORAGE', payload: InventoryDetail[] }
    | { type: 'FILTER_DEPARTMENT', payload: string }
    | { type: 'INCLUDE_LOW_STOCK', payload: boolean }
    | { type: 'SORTING', payload: string }
    | { type: 'SET_INVENTORY_DETAIL', payload: { name: string, value: string } }
    | { type: 'GET_INVENTORY_DETAIL' }
    | { type: 'EDIT_INVENTORY', payload: { id: number, data: InventoryDetail[]}}
    | { type: 'DELETE_INVENTORY', payload: { id: number }}


export type InventoryContextType = State & {
    dispatchInventoryState: React.Dispatch<Action>
}

export type InventoryProviderProps =  {
    children: ReactNode
}