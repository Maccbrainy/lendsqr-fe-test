import InputForm from "../components/InputForm";
// import LoginImage from "../assets/icons/login.svg";
import LoginWelcomeImage from "../assets/login-welcome-image.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function TheLoginPage(){
    const lendsqrLogoSource = `https://www.lendsqr.com/assets/icons/header-logo.svg`;

    const navigate = useNavigate();

    const [loginInputData, setLoginInputData] = useState<{email:string,password: string}>({
        email: "",
        password: ""
    });
    const [isInputEmptyWarning, setIsInputEmptyWarning] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        setLoginInputData((prevState) => ({...prevState, [event.target.name]: event.target.value}))
    }
    const showPasswordHandle = () => {
        showPassword ? setShowPassword(false) : setShowPassword(true)
    }
    const submitLoginInputData = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const {email, password} =  loginInputData;
        console.log("inputData", loginInputData);
        
        if (!email || !password){
            setIsInputEmptyWarning(true)
            return;
        }
        navigate("/app");
    }
    return (
        <div className="login-page">
            <div className="login-content">
                <div className="login-description">
                    <img className="login-logo" src={lendsqrLogoSource} alt="lendsqr logo" title="lendsqr" />
                    <div className="login-image">
                        <img src={LoginWelcomeImage} alt="Login image" title="Welcome Image" />
                    </div>
                </div>
                <div className="login-welcome-form">
                    <div  className="login-form">
                        <h1 className="login-title">Welcome!</h1>
                        <p>Enter details to login.</p>
                        <form className="form-fields">
                            <InputForm inputType="email" inputName="email" placeholder="Email" handleChange={handleChange} warningClass={`${!loginInputData.email && isInputEmptyWarning && 'warning'}`} className={`inputStyle `} required={!loginInputData.email && isInputEmptyWarning} />
                            <InputForm inputType={showPassword ? 'text' : 'password'} inputName="password" placeholder="Password" showPasswordHandle={showPasswordHandle} handleChange={handleChange} warningClass={`${!loginInputData.password && isInputEmptyWarning && 'warning'}`} className={`inputStyle ${!loginInputData.password && isInputEmptyWarning && 'warning'}`}  required={!loginInputData.password && isInputEmptyWarning}/>
                            <div className="forget-password">FORGET PASSWORD?</div>
                            <button onClick={submitLoginInputData} className="form-login-button" type="button" title="login">LOG IN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}