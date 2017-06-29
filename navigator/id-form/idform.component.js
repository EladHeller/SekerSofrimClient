import React from 'react';

const IdForm = () => {
    const idText ='';
    const onTextInput = (proxy, event) =>{
        console.log(proxy,event);
    };
    return (
    <section id="id-form">
        <h1>הזנת מספר תעודת זהות</h1>
        <input onInput={onTextInput} className="id-form" type="text" minLength="3" maxLength="9"/>
        <h5 hidden></h5>
        <button to="confirm" title="לחיצה לאישור תעודת הזהות">אישור</button>
    </section>
    );
}
export default IdForm;