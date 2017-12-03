import React from 'react';

export default ({sendUserDetails, tryAgain, userDetails, userDetailsChanged})=>{
    function changeUserDetails(evt){
        userDetails[evt.target.id] = evt.target.value;
        userDetailsChanged(userDetails);
    }
    return(
    <section id="userNotExist" >
        <h1>פרטי ההזדהות שהזנת אינם תואמים לפרטים שבידנו.</h1>
        <h4>אם נתקלת בבעייה בגישה לאזור האישי ניתן למלא את הפרטים ונסדיר את גישתך בהקדם.</h4>
        <br />
        <input onChange={userDetailsChanged} id="firstName" maxlength="30" placeholder="שם פרטי" value={userDetails.firstName}/>
        <input onChange={userDetailsChanged} id="lastName" maxlength="30" placeholder="שם משפחה" value={userDetails.lastName}/>
        <input onChange={userDetailsChanged} id="pseudonym" maxlength="30" placeholder="שם עט" value={userDetails.pseudonym}/>
        <br />
        <input onChange={userDetailsChanged} id="email" type="email" maxlength="30" placeholder="כתובת מייל" value={userDetails.email}/>
        <input onChange={userDetailsChanged} id="phone" type="tel" maxlength="10" placeholder="טלפון נייד" value={userDetails.phone}/>
        <input onChange={userDetailsChanged} id="tel" type="tel" maxlength="10" placeholder="טלפון בבית" value={userDetails.tel}/>
        <br />
        <h5 hidden></h5>
        <button onClick={sendUserDetails} title="לחיצה לשליחת הפרטים">שליחת פרטים</button>
        <button onClick={tryAgain} class="success" title="נסיון נוסף">נסיון נוסף</button>
    </section>
    );
}