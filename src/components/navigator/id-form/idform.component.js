import React from 'react';
const IdForm = ({isCanSubmit, textChanged, submit}) => {
    let idText ='';

    const onTextInput = (proxy, event) =>{
        if (proxy.target.value.match(/^\d{0,9}$/)){
            idText = proxy.target.value;
            textChanged(idText);
        } else {
            proxy.target.value = idText;
        }
    };
    const keyPressed = (proxy, event)=>{
        if (isCanSubmit && proxy.charCode === 13){
            submit(idText);
        }
    }
    return (
    <section id="id-form">
        <h1>הזנת מספר תעודת זהות</h1>
        <input onChange={console.log} autoFocus="autoFocus" onKeyPress={keyPressed} onInput={onTextInput} id="id-input" type="text" minLength="3" maxLength="9"/>
        <h5 hidden></h5>
        {
            isCanSubmit ? <button className="success" onClick={()=>btnSubmitClicked(idText)} to="confirm" title="לחיצה לאישור תעודת הזהות">אישור</button> 
            :<button disabled="disabled" to="confirm" title="לחיצה לאישור תעודת הזהות">אישור</button>
        }
        
        
    </section>
    );
}
export default IdForm;