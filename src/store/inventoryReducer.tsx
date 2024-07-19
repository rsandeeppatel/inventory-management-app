import { State, Action } from '../types/type'
export const InventoryReducer = (state: State, action : Action) => {
    const { type, payload } = action
    switch (type) {
        case 'LOCAL_STORAGE': {
            return {
                ...state,
                allInventory: payload
            }
        }
        case 'FILTER_DEPARTMENT': {
            return {
                ...state,
                filterDepartMentType: payload
            }
        }
        case 'INCLUDE_LOW_STOCK':{
            return {
                ...state,
                includeLowStock: payload
            }
        }
        case 'SORTING': {
            return {
                ...state,
                sortingType: payload
            }
        }
        case 'SET_INVENTORY_DETAIL': {
            const { name, value } = payload
            return {
                ...state,
                ventoryDetail: { ...state.ventoryDetail, [name]: value }
            }
        }
        case 'GET_INVENTORY_DETAIL': {
            const getInventoryDetail = [...state.allInventory, state.ventoryDetail]

            localStorage.setItem('product', JSON.stringify(getInventoryDetail))
            return {
                ...state,
                allInventory: getInventoryDetail,
                ventoryDetail: {
                    department: "",
                    name: "",
                    description: "",
                    price: 0,
                    stock: 0,
                    sku: "",
                    supplier: "",
                    delivered: 0,
                    imageUrl: ""
                }
            }
        }
        case 'EDIT_INVENTORY': {
            const updatedInventory = state.allInventory.map((item) =>
                item.id === payload.id ? payload : item
            );
            localStorage.setItem('product', JSON.stringify(updatedInventory))
            
            return {
                ...state,
                allInventory: updatedInventory
            }
        }
        case 'DELETE_INVENTORY': {
            const filteredInventory = state.allInventory.filter(
                (item) => item.id !== payload.id
            );
            localStorage.setItem('product', JSON.stringify(filteredInventory));
            return {
                ...state,
                allInventory: filteredInventory
            }
        }
        default:
            return state;
    }
}