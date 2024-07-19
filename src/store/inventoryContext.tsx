import React, { createContext, useEffect, useReducer } from "react"
import { InventoryReducer } from "./inventoryReducer"
import { inventoryData } from "../database/inventoryData"
import { departmentType } from "../database/departmentType"
import { InventoryContextType, InventoryProviderProps, State } from "../types/type"

export const InventoryContext = createContext<InventoryContextType |undefined>(undefined)

const initialState: State = {
    allInventory: inventoryData,
    departMentType: departmentType,
    filterDepartMentType: "",
    includeLowStock: false,
    sortingType: "NAME",
    ventoryDetail: {
        id: 0,
        department: "",
        name: "",
        description: "",
        price: 0,
        stock: 0,
        sku: "",
        supplier: "",
        delivered: 0,
        imageUrl: "",
    },
}

export const InventoryContextProvider: React.FC<InventoryProviderProps> = ({ children }) => {
    const [state, dispatchInventoryState] = useReducer(InventoryReducer, initialState)

    const {
        allInventory,
        filterDepartMentType,
        ventoryDetail,
        departMentType,
        sortingType,
        includeLowStock,
    } = state;

    const totalStock = allInventory.reduce((acc, item) => acc + Number(item.stock), 0);

    const totalDelivered = allInventory.reduce((acc, item) => acc + Number(item.delivered), 0);

    const filterAccordingly = filterDepartMentType
        ? allInventory.filter((item) => item.department === filterDepartMentType)
        : allInventory;

    const sortAccordingly = sortingType === "PRICE"
        ? filterAccordingly.sort((a, b) => a.price - b.price)
        : sortingType === "STOCK"
        ? filterAccordingly.sort((a, b) => a.stock - b.stock)
        : sortingType === "NAME"
        ? filterAccordingly.sort((a, b) => a.name.localeCompare(b.name))
        : filterAccordingly;

    const totalLowStock = includeLowStock
        ? sortAccordingly.filter((item) => item.stock <= 10)
        : sortAccordingly;

    useEffect(() => {
        const isPersist = localStorage.getItem("product");

        if (isPersist) {
            const obtainData = JSON.parse(isPersist);
            dispatchInventoryState({ type: "LOCAL_STORAGE", payload: obtainData });
        } else {
            localStorage.setItem("product", JSON.stringify(allInventory));
            dispatchInventoryState({ type: "LOCAL_STORAGE", payload: allInventory });
        }
    }, []);
    return (
        <InventoryContext.Provider value={{
            ...state,
            dispatchInventoryState,
            totalStock,
            totalDelivered,
            filterAccordingly,
            sortAccordingly,
            totalLowStock,
        }}>{children}</InventoryContext.Provider>
    )
}
