import { createContext, ReactNode, useState } from "react";

interface IFilterProviderProps {
    element: ReactNode
}

interface IFilterContext {
    setFiltroValue: (newValue: string) => void,
    filtroValue: string
}

export const FilterContext = createContext<IFilterContext>({} as IFilterContext)

const FilterProvider = ({element}: IFilterProviderProps) => {
    const [filtroValue, setFiltroValue] = useState("")

    return (
        <FilterContext.Provider value={{filtroValue, setFiltroValue}}>
            {element}
        </FilterContext.Provider>
    )
}

export default FilterProvider