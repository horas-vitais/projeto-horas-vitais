import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";

const routesMain = () => {
    return (
        <Routes>
            <Route path="register" element={<Register/>} />
        </Routes>
    )
};

export default routesMain;
