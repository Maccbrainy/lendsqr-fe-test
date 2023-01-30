import InputForm from "../components/InputForm";
import LoginImage from "../assets/icons/login.svg"
export default function TheLoginPage(){
    const lendsqrLogoSource = `https://www.lendsqr.com/assets/icons/header-logo.svg`;
    const handleChange = () => {

    }
    return (
        <div className="login-page">
            <div className="login-content">
                <div className="login-description">
                    <img className="login-logo" src={lendsqrLogoSource} alt="lendsqr logo" title="lendsqr" />
                    <div className="login-image">
                        <img src={LoginImage} alt="Login image" title="Login" />
                    </div>
                </div>
                <div className="login-welcome-form">
                    <div  className="login-form">
                        <h1 className="login-title">Welcome</h1>
                        <p>Enter details to login.</p>
                        <form className="form-fields">
                            <InputForm type="email" name="email" placeholder="Email" handleChange={handleChange} className={'inputClass'}  />
                            <InputForm type="password" name="password" placeholder="Password" handleChange={handleChange} className={'inputClass'}  />
                            <div className="forget-password">FORGET PASSWORD?</div>
                            <button className="form-login-button" type="button" title="login">LOG IN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}