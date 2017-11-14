import React from 'react';

const UserArea = ({user, year}) => {
    console.log(user);
    let priceArea;
    if (user.award > 0) {
        priceArea = <div>
            <h4 id="win-text-price">הננו מתכבדים להודיעך כי ע"פ תוצאות סקר הסופרים המעודכן שבוצע בספריות הציבוריות לשנת {year} מתוכנן לשלם לך סך {Number(user.award).toFixed(2)} ₪, לפני מע"מ.</h4>
            {winDetails}
        </div>;
    } else if (user.award ===0) {
        priceArea = <h4 id="win-text-price">לצערנו סך השאלות ספריך בשנת {year} לא הגיע לרף המינימאלי הדרוש לקבלת זכאות לתשלומים ממשרד התרבות.</h4>;
    } else {
        priceArea = <h4 id="win-text-price">נכון להיום, טרם התקבלו תוצאות.</h4>;
    }
    return (
    <section id="userArea">
        <h2><span>מידע אישי לסופר <b>{user.firstName}</b>.</span></h2>
        {priceArea}
        <hr style={{marginBottom: '10px',marginTop:'10px'}}/>
        <h4><small>ניתן לעדכן את הפרטים כאן באופן עצמאי, בסיום יש ללחוץ על סימן הV לשמירת השינויים.</small></h4>
        <table className="table table-condensed details-table" style={{marginBottom: '0px'}}>
            <thead>
                <tr>
                    <th>שם פרטי</th>
                    <th>שם משפחה</th>
                    <th>שם עט</th>
                    <th>ת.ז</th>
                    <th>סיסמא</th>
                    <th>טלפון נייד</th>
                    <th>טלפון נייח</th>
                    <th>כתובת מייל</th>
                    <th>שמירה</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input id="firstName"/>{user.firstName}</td>
                    <td><input id="lastName"/>{user.lastName}</td>
                    <td><input id="pseudonym"/>{user.pseudonym}</td>
                    <td><input id="id" disabled />{user.ID}</td>
                    <td><input id="password"/>{user.password}</td>
                    <td><input id="phone"/>{user.phone}</td>
                    <td><input id="tel"/>{user.tel}</td>
                    <td><input id="email"/>{user.email}</td>
                    <td data-toggle="modal" data-target="#confirmModal"><span className="glyphicon glyphicon-saved"></span></td>
                </tr>
            </tbody>
        </table>
        <h4 id="msg-to-user"></h4>
    </section>
    );
}

const winDetails = <div id="win-text">
<p>חברת מידע שיווקי (סי.איי.) יועצים בע"מ זכתה במכרז לניהול התשלומים לסופרים. לכן הפטור והחשבונית חייבים להיות על שם  <strong>מידע שיווקי (סי.איי.) יועצים בע"מ.</strong></p>
<p><strong>סופרים שהינם עוסקים מורשים </strong>מתבקשים להמציא חשבונית מס בהתאם לסכום שצוין ובתוספת מע"מ בשיעור 17% כחוק. כמו כן, יצרף הסופר אישור על ניהול ספרים + אישור על ניכוי מס במקור וכן עדכון פרטי חשבון הבנק להעברת הכספים.</p>
<p><strong>סופרים שמסווגים כעוסק פטור </strong>מתבקשים להגיש חשבון/קבלה בהתאם לסכום שצוין. כמו כן יצרף הסופר אישור על ניהול ספרים+ אישור על ניכוי מס במקור + אישור עוסק פטור וכן עדכון פרטי חשבון הבנק להעברת הכספים.</p>
<p><strong>סופרים שעיקר הכנסתם היא ממשכורת, מגמלה וכד' </strong>יעבירו הצהרה על כך, כמפורט בקובץ בקשת התשלומים המצורף בהמשך, בצירוף אישור בדבר תיאום מס תקף וכן עדכון פרטי חשבון הבנק להעברת הכספים (במידה ולא יצורף אישור מס, ינוכה המס המרבי לפי הקבוע בחוק).</p>
<p><strong>אישור מס הכנסה לקביעת שיעור ניכוי המס הינו עבור תמלוגים לסופרים מיועד מידע שיווקי (סי.איי.) יועצים בע"מ, מס' תיק ניכויים  939377628.</strong></p>
    <p><strong></strong></p>
<p><strong>להורדת קובץ דרישת תשלומים לדוגמה, <a href="./טופס דרישת תשלומים לדוגמה.docx?1">לחץ כאן.</a></strong></p>
<h4 style={{color:'#900'}}><strong>על הטפסים להגיע למשרדי חברת מידע שיווקי (סי.איי.) יועצים בע"מ, עד תאריך 31.07.2017 ח' אב תשע"ז. סופרים שלא יגישו את הטפסים עד התאריך הנ"ל יאבדו את זכאותם!</strong></h4>
</div>
export default UserArea;