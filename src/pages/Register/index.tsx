import { useState } from "react";
import RegisterForm from "../../components/RegisterForm";
import { HeaderRegister, RegisterContainer } from "./styles";

const Register = () => {
    const [isOng, setIsOng] = useState(false)

    return (
        <RegisterContainer>
            <HeaderRegister>
                {
                    isOng ? <></> : <div>DOAR MEU TEMPO</div>
                }
            </HeaderRegister>
            <RegisterForm isOng={isOng} setIsOng={setIsOng}/>
        </RegisterContainer>
    )
};

export default Register;
