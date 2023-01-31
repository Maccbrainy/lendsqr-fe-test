interface InputFormProps {
    inputType: string,
    inputName: string,
    value?: string,
    placeholder: string,
    handleChange: (event: {target: {name:string, value: string}}) => void,
    className?: string,
    required?: boolean,
    warningClass?: string,
    showPasswordHandle?: () => void
}

const InputForm = ({inputType, inputName, value, placeholder, handleChange, showPasswordHandle, className, warningClass, required }:InputFormProps) => {
    return(
        <div>
            <div className={`input-login-container ${warningClass}`}>
                <input type={inputType} value={value} name={inputName} placeholder={placeholder} onChange={(event) => handleChange(event)} className={`${className}`} required/>
                {
                  inputName == 'password' && <div onClick={showPasswordHandle} className="password-show">{ inputType == 'password' ? 'SHOW' : 'HIDE'}</div>
                }
            </div>
            {required && <span className="input-data-warning">{placeholder} is required!</span>}
        </div>
    )
}
export default InputForm;