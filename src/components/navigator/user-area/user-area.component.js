import React from 'react';

const UserArea = ({user}) => {
    return (
    <section id="userArea">
        <h2><span>מידע אישי לסופר <b>{userName}</b>.</span></h2>
        <h4 id="win-text-price"></h4>
        <div id="win-text" hidden>
            <p>חברת מידע שיווקי (סי.איי.) יועצים בע"מ זכתה במכרז לניהול התשלומים לסופרים. לכן הפטור והחשבונית חייבים להיות על שם  <strong>מידע שיווקי (סי.איי.) יועצים בע"מ.</strong></p>
            <p><strong>סופרים שהינם עוסקים מורשים </strong>מתבקשים להמציא חשבונית מס בהתאם לסכום שצוין ובתוספת מע"מ בשיעור 17% כחוק. כמו כן, יצרף הסופר אישור על ניהול ספרים + אישור על ניכוי מס במקור וכן עדכון פרטי חשבון הבנק להעברת הכספים.</p>
            <p><strong>סופרים שמסווגים כעוסק פטור </strong>מתבקשים להגיש חשבון/קבלה בהתאם לסכום שצוין. כמו כן יצרף הסופר אישור על ניהול ספרים+ אישור על ניכוי מס במקור + אישור עוסק פטור וכן עדכון פרטי חשבון הבנק להעברת הכספים.</p>
            <p><strong>סופרים שעיקר הכנסתם היא ממשכורת, מגמלה וכד' </strong>יעבירו הצהרה על כך, כמפורט בקובץ בקשת התשלומים המצורף בהמשך, בצירוף אישור בדבר תיאום מס תקף וכן עדכון פרטי חשבון הבנק להעברת הכספים (במידה ולא יצורף אישור מס, ינוכה המס המרבי לפי הקבוע בחוק).</p>
            <p><strong>אישור מס הכנסה לקביעת שיעור ניכוי המס הינו עבור תמלוגים לסופרים מיועד מידע שיווקי (סי.איי.) יועצים בע"מ, מס' תיק ניכויים  939377628.</strong></p>
                <p><strong></strong></p>
            <p><strong>להורדת קובץ דרישת תשלומים לדוגמה, <a href="טופס דרישת תשלומים לדוגמה.docx?1">לחץ כאן.</a></strong></p>
            <h4 style="color:#900"><strong>על הטפסים להגיע למשרדי חברת מידע שיווקי (סי.איי.) יועצים בע"מ, עד תאריך 31.07.2017 ח' אב תשע"ז. סופרים שלא יגישו את הטפסים עד התאריך הנ"ל יאבדו את זכאותם!</strong></h4>
        </div>
        <hr style="margin-bottom: 10px;margin-top:10px;"/>
        <h4><small>ניתן לעדכן את הפרטים כאן באופן עצמאי, בסיום יש ללחוץ על סימן הV לשמירת השינויים.</small></h4>
        <table class="table table-condensed" style="margin-bottom: 0">
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
                    <td><input id="firstName"/></td>
                    <td><input id="lastName"/></td>
                    <td><input id="pseudonym"/></td>
                    <td><input id="id" disabled /></td>
                    <td><input id="password"/></td>
                    <td><input id="phone"/></td>
                    <td><input id="tel"/></td>
                    <td><input id="email"/></td>
                    <td data-toggle="modal" data-target="#confirmModal"><span class="glyphicon glyphicon-saved"></span></td>
                </tr>
            </tbody>
        </table>
        <h4 id="msg-to-user"></h4>
    </section>
    );
}
export default UserArea;