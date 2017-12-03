export default ()=>(
    <section id="userNotExist" >
        <h1>פרטי ההזדהות שהזנת אינם תואמים לפרטים שבידנו.</h1>
        <h4>אם נתקלת בבעייה בגישה לאזור האישי ניתן למלא את הפרטים ונסדיר את גישתך בהקדם.</h4>
        <br />
        <input type="text" maxlength="30" placeholder="שם פרטי" />
        <input type="text" maxlength="30" placeholder="שם משפחה" />
        <input type="text" maxlength="30" placeholder="שם עט" />
        <br />
        <input type="email" maxlength="30" placeholder="כתובת מייל" />
        <input type="tel" maxlength="10" placeholder="טלפון נייד" />
        <input type="tel" maxlength="10" placeholder="טלפון בבית" />
        <br />
        <h5 hidden></h5>
        <button to="confirm" title="לחיצה לשליחת הפרטים">שליחת פרטים</button>
        <button to="tryAgain" class="success" title="נסיון נוסף">נסיון נוסף</button>
    </section>
)