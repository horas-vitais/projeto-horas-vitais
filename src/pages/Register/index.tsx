import { useState } from "react";
import RegisterForm from "../../components/RegisterForm";
import { HeaderRegister, RegisterContainer, DivFlexDirection } from "./styles";
import ImgLogin from "../../assets/logoLogin.svg"
import backArrow from "../../assets/backArrow.svg"
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()

    const [isOng, setIsOng] = useState(false)

    function comeBackBtn (){
        if(isOng){
            setIsOng(false)
        }else{     
            navigate('../', { replace: true })
        }
    }

    return (
        <RegisterContainer>
            <HeaderRegister>
                <button onClick={comeBackBtn}><img src={backArrow} alt="Voltar"/>Voltar</button>
                {
                    isOng ? <><h1><em>INSCREVER</em> INSTITUIÇÃO</h1></> : <h1><em>DOAR</em> MEU TEMPO</h1>
                }
            </HeaderRegister>
            <DivFlexDirection>
                <img src={ImgLogin} alt="" />
                <RegisterForm isOng={isOng} setIsOng={setIsOng}/>
            </DivFlexDirection>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false} 
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
                    {/* Same as */}
                    <ToastContainer />
        </RegisterContainer>
    )
};

export default Register;
