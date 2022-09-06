import { useContext, useState } from "react"
import { FilterContext } from "../../contexts/filterContext"
import { Form } from "./styles"

const FiltroDoadores = () => {
    const [value, setValue] = useState("")
    const {setFiltroValue} = useContext(FilterContext)

    return (
        <Form onSubmit={() => setFiltroValue(value)}>
            <input type="text" placeholder="Filtre por especialidade" onChange={(e) => setValue(e.target.value) }/>
            <button type="submit">Pesquisar</button>
        </Form>
    )
}

export default FiltroDoadores