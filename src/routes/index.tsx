import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="register" element={<Register/>} />
        </Routes>
    )
};

export default RoutesMain;
