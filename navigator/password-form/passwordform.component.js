import React from 'react';

const PasswordForm = ({isCanSubmit, textChanged, submit, passwordSendTo}) => {
    let passwordText ='';
    let passwordSendToDisplay = passwordSendTo && (passwordSendTo === 'email' ? 'דואר האלקטרוני' : 'נייד');
    let passwordSendToText = passwordSendTo && `סיסמה חדשה נשלחה אליך ל${passwordSendToDisplay}.`;
    const onTextInput = (proxy, event) =>{
        passwordText = proxy.target.value.trim();
        textChanged(passwordText);
    };
    const btnSubmitClicked = (proxy, event)=>{
        submit(passwordText);
    }
    const keyPressed = (proxy, event)=>{
        if (isCanSubmit && proxy.charCode === 13){
            submit(passwordText);
        }
    }
    return (
    <section id="password-form">
            <h1>הזנת סיסמא</h1>
            {passwordSendToText && <h4>{passwordSendToText}</h4>}
            <br />
            <input onInput={onTextInput} autoFocus="autoFocus" onKeyPress={keyPressed}/>
            <h5 hidden></h5>
            {isCanSubmit ?<button onClick={btnSubmitClicked} className="success" to="confirm" title="לחיצה לאישור הסיסמא">אישור</button>
            :<button disabled="disabled" to="confirm" title="לחיצה לאישור הסיסמא">אישור</button>
            }
            <button className="success" to="reset" title="לחיצה לקבלת סיסמא חדשה">שכחתי סיסמא</button>
        </section>
    );
}
export default PasswordForm;