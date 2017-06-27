import React from 'react';

const IdForm = () => {
    return (
    <section id="id-form">
        <h1>הזנת מספר תעודת זהות</h1>
        <input className="id-form" type="text" maxlength="9"/>
        <h5 hidden></h5>
        <button to="confirm" title="לחיצה לאישור תעודת הזהות">אישור</button>
    </section>
    );
}
export default IdForm;